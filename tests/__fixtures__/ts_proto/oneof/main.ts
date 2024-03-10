/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Branch1 {
  String: string;
}

export interface Branch2 {
  UInt32: number;
}

export interface OneOf {
  Messages?: { $case: "Branch1"; Branch1: Branch1 } | { $case: "Branch2"; Branch2: Branch2 } | undefined;
  NonOneOf1: string;
  SecondMessage?: { $case: "Branch3"; Branch3: string } | { $case: "Branch4"; Branch4: number } | undefined;
  NonOneOf2: string;
}

function createBaseBranch1(): Branch1 {
  return { String: "" };
}

export const Branch1 = {
  encode(message: Branch1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.String !== "") {
      writer.uint32(10).string(message.String);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Branch1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBranch1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.String = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Branch1 {
    return { String: isSet(object.String) ? globalThis.String(object.String) : "" };
  },

  toJSON(message: Branch1): unknown {
    const obj: any = {};
    if (message.String !== "") {
      obj.String = message.String;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Branch1>, I>>(base?: I): Branch1 {
    return Branch1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Branch1>, I>>(object: I): Branch1 {
    const message = createBaseBranch1();
    message.String = object.String ?? "";
    return message;
  },
};

function createBaseBranch2(): Branch2 {
  return { UInt32: 0 };
}

export const Branch2 = {
  encode(message: Branch2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.UInt32 !== 0) {
      writer.uint32(8).uint32(message.UInt32);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Branch2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBranch2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.UInt32 = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Branch2 {
    return { UInt32: isSet(object.UInt32) ? globalThis.Number(object.UInt32) : 0 };
  },

  toJSON(message: Branch2): unknown {
    const obj: any = {};
    if (message.UInt32 !== 0) {
      obj.UInt32 = Math.round(message.UInt32);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Branch2>, I>>(base?: I): Branch2 {
    return Branch2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Branch2>, I>>(object: I): Branch2 {
    const message = createBaseBranch2();
    message.UInt32 = object.UInt32 ?? 0;
    return message;
  },
};

function createBaseOneOf(): OneOf {
  return { Messages: undefined, NonOneOf1: "", SecondMessage: undefined, NonOneOf2: "" };
}

export const OneOf = {
  encode(message: OneOf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.Messages?.$case) {
      case "Branch1":
        Branch1.encode(message.Messages.Branch1, writer.uint32(10).fork()).ldelim();
        break;
      case "Branch2":
        Branch2.encode(message.Messages.Branch2, writer.uint32(18).fork()).ldelim();
        break;
    }
    if (message.NonOneOf1 !== "") {
      writer.uint32(26).string(message.NonOneOf1);
    }
    switch (message.SecondMessage?.$case) {
      case "Branch3":
        writer.uint32(34).string(message.SecondMessage.Branch3);
        break;
      case "Branch4":
        writer.uint32(40).int32(message.SecondMessage.Branch4);
        break;
    }
    if (message.NonOneOf2 !== "") {
      writer.uint32(50).string(message.NonOneOf2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneOf {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneOf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Messages = { $case: "Branch1", Branch1: Branch1.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Messages = { $case: "Branch2", Branch2: Branch2.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.NonOneOf1 = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.SecondMessage = { $case: "Branch3", Branch3: reader.string() };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.SecondMessage = { $case: "Branch4", Branch4: reader.int32() };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.NonOneOf2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneOf {
    return {
      Messages: isSet(object.Branch1)
        ? { $case: "Branch1", Branch1: Branch1.fromJSON(object.Branch1) }
        : isSet(object.Branch2)
        ? { $case: "Branch2", Branch2: Branch2.fromJSON(object.Branch2) }
        : undefined,
      NonOneOf1: isSet(object.NonOneOf1) ? globalThis.String(object.NonOneOf1) : "",
      SecondMessage: isSet(object.Branch3)
        ? { $case: "Branch3", Branch3: globalThis.String(object.Branch3) }
        : isSet(object.Branch4)
        ? { $case: "Branch4", Branch4: globalThis.Number(object.Branch4) }
        : undefined,
      NonOneOf2: isSet(object.NonOneOf2) ? globalThis.String(object.NonOneOf2) : "",
    };
  },

  toJSON(message: OneOf): unknown {
    const obj: any = {};
    if (message.Messages?.$case === "Branch1") {
      obj.Branch1 = Branch1.toJSON(message.Messages.Branch1);
    }
    if (message.Messages?.$case === "Branch2") {
      obj.Branch2 = Branch2.toJSON(message.Messages.Branch2);
    }
    if (message.NonOneOf1 !== "") {
      obj.NonOneOf1 = message.NonOneOf1;
    }
    if (message.SecondMessage?.$case === "Branch3") {
      obj.Branch3 = message.SecondMessage.Branch3;
    }
    if (message.SecondMessage?.$case === "Branch4") {
      obj.Branch4 = Math.round(message.SecondMessage.Branch4);
    }
    if (message.NonOneOf2 !== "") {
      obj.NonOneOf2 = message.NonOneOf2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneOf>, I>>(base?: I): OneOf {
    return OneOf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneOf>, I>>(object: I): OneOf {
    const message = createBaseOneOf();
    if (
      object.Messages?.$case === "Branch1" &&
      object.Messages?.Branch1 !== undefined &&
      object.Messages?.Branch1 !== null
    ) {
      message.Messages = { $case: "Branch1", Branch1: Branch1.fromPartial(object.Messages.Branch1) };
    }
    if (
      object.Messages?.$case === "Branch2" &&
      object.Messages?.Branch2 !== undefined &&
      object.Messages?.Branch2 !== null
    ) {
      message.Messages = { $case: "Branch2", Branch2: Branch2.fromPartial(object.Messages.Branch2) };
    }
    message.NonOneOf1 = object.NonOneOf1 ?? "";
    if (
      object.SecondMessage?.$case === "Branch3" &&
      object.SecondMessage?.Branch3 !== undefined &&
      object.SecondMessage?.Branch3 !== null
    ) {
      message.SecondMessage = { $case: "Branch3", Branch3: object.SecondMessage.Branch3 };
    }
    if (
      object.SecondMessage?.$case === "Branch4" &&
      object.SecondMessage?.Branch4 !== undefined &&
      object.SecondMessage?.Branch4 !== null
    ) {
      message.SecondMessage = { $case: "Branch4", Branch4: object.SecondMessage.Branch4 };
    }
    message.NonOneOf2 = object.NonOneOf2 ?? "";
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
