/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "external";

export interface Properties {
  Properties: string;
}

export interface Labels {
  Labels: string;
}

function createBaseProperties(): Properties {
  return { Properties: "" };
}

export const Properties = {
  encode(message: Properties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Properties !== "") {
      writer.uint32(10).string(message.Properties);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Properties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Properties = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Properties {
    return { Properties: isSet(object.Properties) ? globalThis.String(object.Properties) : "" };
  },

  toJSON(message: Properties): unknown {
    const obj: any = {};
    if (message.Properties !== "") {
      obj.Properties = message.Properties;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Properties>, I>>(base?: I): Properties {
    return Properties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Properties>, I>>(object: I): Properties {
    const message = createBaseProperties();
    message.Properties = object.Properties ?? "";
    return message;
  },
};

function createBaseLabels(): Labels {
  return { Labels: "" };
}

export const Labels = {
  encode(message: Labels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Labels !== "") {
      writer.uint32(10).string(message.Labels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Labels {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Labels = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Labels {
    return { Labels: isSet(object.Labels) ? globalThis.String(object.Labels) : "" };
  },

  toJSON(message: Labels): unknown {
    const obj: any = {};
    if (message.Labels !== "") {
      obj.Labels = message.Labels;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Labels>, I>>(base?: I): Labels {
    return Labels.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Labels>, I>>(object: I): Labels {
    const message = createBaseLabels();
    message.Labels = object.Labels ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
