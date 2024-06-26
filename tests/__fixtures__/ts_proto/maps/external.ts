/* eslint-disable */
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "external";

export interface MapValue {
  Value: string;
}

function createBaseMapValue(): MapValue {
  return { Value: "" };
}

export const MapValue = {
  encode(message: MapValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapValue {
    return { Value: isSet(object.Value) ? String(object.Value) : "" };
  },

  toJSON(message: MapValue): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapValue>, I>>(object: I): MapValue {
    const message = createBaseMapValue();
    message.Value = object.Value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
