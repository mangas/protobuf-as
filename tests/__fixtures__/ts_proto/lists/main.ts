/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum Enum {
  Zero = 0,
  One = 1,
  Two = 2,
  UNRECOGNIZED = -1,
}

export function enumFromJSON(object: any): Enum {
  switch (object) {
    case 0:
    case "Zero":
      return Enum.Zero;
    case 1:
    case "One":
      return Enum.One;
    case 2:
    case "Two":
      return Enum.Two;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Enum.UNRECOGNIZED;
  }
}

export function enumToJSON(object: Enum): string {
  switch (object) {
    case Enum.Zero:
      return "Zero";
    case Enum.One:
      return "One";
    case Enum.Two:
      return "Two";
    case Enum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Message {
  String: string;
}

export interface Lists {
  Enums: Enum[];
  Strings: string[];
  Bytes: Uint8Array[];
  Messages: Message[];
  Ints: number[];
}

function createBaseMessage(): Message {
  return { String: "" };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.String !== "") {
      writer.uint32(10).string(message.String);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
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

  fromJSON(object: any): Message {
    return { String: isSet(object.String) ? globalThis.String(object.String) : "" };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.String !== "") {
      obj.String = message.String;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.String = object.String ?? "";
    return message;
  },
};

function createBaseLists(): Lists {
  return { Enums: [], Strings: [], Bytes: [], Messages: [], Ints: [] };
}

export const Lists = {
  encode(message: Lists, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.Enums) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.Strings) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.Bytes) {
      writer.uint32(26).bytes(v!);
    }
    for (const v of message.Messages) {
      Message.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.Ints) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lists {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLists();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.Enums.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Enums.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Strings.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Bytes.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Messages.push(Message.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag === 40) {
            message.Ints.push(reader.int32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Ints.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lists {
    return {
      Enums: globalThis.Array.isArray(object?.Enums) ? object.Enums.map((e: any) => enumFromJSON(e)) : [],
      Strings: globalThis.Array.isArray(object?.Strings) ? object.Strings.map((e: any) => globalThis.String(e)) : [],
      Bytes: globalThis.Array.isArray(object?.Bytes) ? object.Bytes.map((e: any) => bytesFromBase64(e)) : [],
      Messages: globalThis.Array.isArray(object?.Messages) ? object.Messages.map((e: any) => Message.fromJSON(e)) : [],
      Ints: globalThis.Array.isArray(object?.Ints) ? object.Ints.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: Lists): unknown {
    const obj: any = {};
    if (message.Enums?.length) {
      obj.Enums = message.Enums.map((e) => enumToJSON(e));
    }
    if (message.Strings?.length) {
      obj.Strings = message.Strings;
    }
    if (message.Bytes?.length) {
      obj.Bytes = message.Bytes.map((e) => base64FromBytes(e));
    }
    if (message.Messages?.length) {
      obj.Messages = message.Messages.map((e) => Message.toJSON(e));
    }
    if (message.Ints?.length) {
      obj.Ints = message.Ints.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lists>, I>>(base?: I): Lists {
    return Lists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lists>, I>>(object: I): Lists {
    const message = createBaseLists();
    message.Enums = object.Enums?.map((e) => e) || [];
    message.Strings = object.Strings?.map((e) => e) || [];
    message.Bytes = object.Bytes?.map((e) => e) || [];
    message.Messages = object.Messages?.map((e) => Message.fromPartial(e)) || [];
    message.Ints = object.Ints?.map((e) => e) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
