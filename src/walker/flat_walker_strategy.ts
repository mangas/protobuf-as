import { decorated } from '../proto/index.js';
import { ImmutableFlatTree } from '../structs/immutable_flat_tree.js';
import { DecoratedDescriptorIndex } from '../proto/decorated_descriptor_index.js';
import { AbstractDescriptorCollection } from '../proto/index.js';
import { isField } from '../proto/decorated_descriptor.js';

/**
 * File interface represents the generated file
 */
export interface File {
  name: string;
  content: string;
}

/**
 * Walker interface, emits files
 */
export interface Walker {
  files(): File[];
}

// Walker strategy is a strategy which calls a walker methods in an order required
// to produce a specific target structure. It's like a SAX parser, but reversed.
// For example, FlatWalkerStrategy walks namespaces hierarchically, and messages sequentially,
// including subpaths usually required for OO languages.
//
// It aims to generate encode(), decode() and size() methods.
export abstract class WalkerStrategy<T, D> {
  constructor(protected index: AbstractDescriptorCollection<D>) { }
  public abstract walk(walker: T): void;
}

export interface FlatBlocksWalker {
  beforeAll(): void;
  afterAll(): void;
}

export interface FlatNamespaceWalker {
  startNamespace(namespace: decorated.Namespace): void;
  referenceExternal(namespace: decorated.Namespace, ext: string): void;
  finishNamespace(namespace: decorated.Namespace): void;
}

export interface FlatEnumWalker {
  startEnum(en: decorated.Enum): void;
  enumValue(item: decorated.EnumValue): void;
  finishEnum(en: decorated.Enum): void;
}

export interface FlatMessageWalker {
  startMessage(message: decorated.Message): void;
  finishMessage(message: decorated.Message): void;
}

export interface FlatMessageDecodeWalker {
  startDecode(message: decorated.Message): void;
  beginDecode(message: decorated.Message): void;
  endDecode(message: decorated.Message): void;
  finishDecode(message: decorated.Message): void;
}

export interface FlatMessageEncodeWalker {
  startEncode(message: decorated.Message): void;
  beginEncode(message: decorated.Message): void;
  endEncode(message: decorated.Message): void;
  finishEncode(message: decorated.Message): void;
}

export interface FlatMessageSizeWalker {
  startSize(message: decorated.Message): void;
  finishSize(message: decorated.Message): void;
}

export interface FlatFieldWalker {
  fieldDecl(field: decorated.Field): void;
  fieldInit(field: decorated.Field): void;
  fieldDecode(field: decorated.Field): void;
  fieldSize(field: decorated.Field): void;
  fieldEncode(field: decorated.Field): void;
}

export interface FlatOneOfWalker {
  oneOfDiscriminatorDecl(message: decorated.Message, group: string): void;
  oneOfDiscriminatorConst(desc: decorated.Field): void;
}

// Flat walker must meet this interface
export type FlatWalker = Walker &
  FlatBlocksWalker &
  FlatNamespaceWalker &
  FlatEnumWalker &
  FlatMessageWalker &
  FlatMessageDecodeWalker &
  FlatMessageSizeWalker &
  FlatMessageEncodeWalker &
  FlatFieldWalker &
  FlatOneOfWalker;

/**
 * Implements the generic walker strategy for an OO language.
 *
 * - Namespaces are hierachical.
 * - Enums and messages are sequentially nested into namespaces.
 * - decode(), encode() and size() methods.
 */
export class FlatWalkerStrategy extends WalkerStrategy<
  FlatWalker,
  decorated.Descriptor
> {
  private items: ImmutableFlatTree<decorated.Descriptor>;

  constructor(protected index: DecoratedDescriptorIndex) {
    super(index);
    this.items = new ImmutableFlatTree<decorated.Descriptor>(
      index.values().map((v) => [v.id, v]),
    );
  }

  walk(walker: FlatWalker) {
    walker.beforeAll();

    // Get root namespaces along with topmost enums and messages which are not linked to any namespace
    this.items
      .filter((item) => {
        const [, desc, level] = item;
        let match: boolean;

        if (desc.kind == 'namespace') {
          match = level == 1; // Root namespace
        } else {
          // Enum or message which does not belong to any namespace
          match =
            desc.namespace == '' &&
            ['enum', 'message'].includes(desc.kind);
        }

        return match ? item : null;
      })
      .forEach(([, desc]) => this.walkItem(walker, desc));

    walker.afterAll();
  }

  private walkItem(walker: FlatWalker, desc: decorated.Descriptor) {
    switch (desc.kind) {
      case 'namespace':
        return this.walkNamespace(walker, desc);
      case 'enum':
        return this.walkEnum(walker, desc);
      case 'enum_value':
        return this.walkEnumValue(walker, desc);
      case 'message':
        return this.walkMessage(walker, desc);
      default:
        throw new Error(`Unknown descriptor kind ${desc}`);
    }
  }

  private walkExternals(
    walker: FlatWalker,
    namespaceDesc: decorated.Namespace,
  ) {
    const externals = new Array<string>()

    // Generate references to external namespaces within this particular namespace
    this.items.descendants(namespaceDesc.id).forEach(([, desc]) => {
      if (desc.namespace != namespaceDesc.id) {
        return
      }

      if (!isField(desc)) {
        return
      }

      if (desc.kind == 'field_message' || desc.kind == 'field_message_repeated') {
        if (desc.typeName.namespace != namespaceDesc.id) {
          externals.push(desc.typeName.namespace)
        }
      }

      if (desc.kind == 'field_map_message') {
        if (desc.value.typeName.namespace != namespaceDesc.id) {
          externals.push(desc.value.typeName.namespace)
        }
      }
    })

    externals
      .filter((value, index, self) => self.indexOf(value) === index)
      .forEach(name => walker.referenceExternal(namespaceDesc, name))
  }

  private walkNamespace(
    walker: FlatWalker,
    namespaceDesc: decorated.Namespace,
  ) {
    walker.startNamespace(namespaceDesc);

    this.walkExternals(walker, namespaceDesc)

    // Walk by this namespace items
    this.items.descendants(namespaceDesc.id).forEach(([, desc]) => {
      // Walk inside namespaces of any nesting level
      if (desc.kind == 'namespace') {
        this.walkItem(walker, desc);
      }

      // Walk inside enums and messages which belong to this particular namespace
      if (
        ['enum', 'message'].includes(desc.kind) &&
        desc.namespace == namespaceDesc.id
      ) {
        this.walkItem(walker, desc);
      }
    });
    walker.finishNamespace(namespaceDesc);
  }

  private walkEnum(walker: FlatWalker, desc: decorated.Enum) {
    walker.startEnum(desc);
    this.items
      .descendants(desc.id, 1)
      .forEach(([, desc]) => this.walkItem(walker, desc));
    walker.finishEnum(desc);
  }

  private walkEnumValue(walker: FlatWalker, desc: decorated.EnumValue) {
    walker.enumValue(desc);
  }

  private walkMessage(walker: FlatWalker, desc: decorated.Message) {
    // Skip proto map entry artificial types
    if (desc.mapHelper) {
      return
    }

    // Get direct children which are fields
    const children = this.items.descendants(desc.id, 1).filter((value) => {
      const [, desc] = value;
      return decorated.isField(desc) ? value : null;
    });

    walker.startMessage(desc);
    children.forEach(([, fieldDesc]) => walker.fieldDecl(<decorated.Field>fieldDesc));

    desc.oneOf.forEach((group) => walker.oneOfDiscriminatorDecl(desc, group))
    children.forEach(([, fieldDesc]) => walker.oneOfDiscriminatorConst(<decorated.Field>fieldDesc))

    walker.startDecode(desc);
    children.forEach(([, fieldDesc]) => walker.fieldInit(<decorated.Field>fieldDesc));
    walker.beginDecode(desc);
    children.forEach(([, fieldDesc]) =>
      walker.fieldDecode(<decorated.Field>fieldDesc),
    );
    walker.endDecode(desc);
    walker.finishDecode(desc);

    walker.startSize(desc);
    children.forEach(([, fieldDesc]) => walker.fieldSize(<decorated.Field>fieldDesc));
    walker.finishSize(desc);

    walker.startEncode(desc);
    walker.beginEncode(desc);
    children.forEach(([, fieldDesc]) =>
      walker.fieldEncode(<decorated.Field>fieldDesc),
    );
    walker.endEncode(desc);
    walker.finishEncode(desc);

    walker.finishMessage(desc);
  }
}
