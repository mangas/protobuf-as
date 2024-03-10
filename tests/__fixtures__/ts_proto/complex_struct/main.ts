/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Properties } from "./external";
import { Properties as Properties1 } from "./external.external";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

/** Status represents object status */
export enum Status {
  Draft = 0,
  Active = 1,
  Deleted = 2,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "Draft":
      return Status.Draft;
    case 1:
    case "Active":
      return Status.Active;
    case 2:
    case "Deleted":
      return Status.Deleted;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.Draft:
      return "Draft";
    case Status.Active:
      return "Active";
    case Status.Deleted:
      return "Deleted";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Labels represents object labels */
export interface Labels {
  /** Labels represents array of labels */
  Labels: string[];
}

/** Message is the base message structure */
export interface Message {
  String: string;
  Labels: Labels | undefined;
  Status1: Status;
  Status2: Status;
  Network: Message_Service;
  Strings: string[];
  MapString: { [key: string]: string };
  MapMessages: { [key: string]: Message_Message };
  Properties1: Properties | undefined;
  Properties2: Properties1 | undefined;
  Services: Message_Service[];
}

/** Enum is nested enum */
export enum Message_Service {
  /** None - None */
  None = 0,
  /** Facebook - Facebook profile */
  Facebook = 1,
  /** Google - Google profile */
  Google = 2,
  UNRECOGNIZED = -1,
}

export function message_ServiceFromJSON(object: any): Message_Service {
  switch (object) {
    case 0:
    case "None":
      return Message_Service.None;
    case 1:
    case "Facebook":
      return Message_Service.Facebook;
    case 2:
    case "Google":
      return Message_Service.Google;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Message_Service.UNRECOGNIZED;
  }
}

export function message_ServiceToJSON(object: Message_Service): string {
  switch (object) {
    case Message_Service.None:
      return "None";
    case Message_Service.Facebook:
      return "Facebook";
    case Message_Service.Google:
      return "Google";
    case Message_Service.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Message.Message is the nested Message structure */
export interface Message_Message {
  String: string;
  Messages: { [key: string]: Message_Message };
}

/** Message.Message.Message is the Message structure nested into nested structure */
export interface Message_Message_Message {
  /** Example strings */
  Strings: string[];
  /** Protobuf timestamp */
  Timestamp: Date | undefined;
}

export interface Message_Message_MessagesEntry {
  key: string;
  value: Message_Message | undefined;
}

export interface Message_MapStringEntry {
  key: string;
  value: string;
}

export interface Message_MapMessagesEntry {
  key: string;
  value: Message_Message | undefined;
}

function createBaseLabels(): Labels {
  return { Labels: [] };
}

export const Labels = {
  encode(message: Labels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Labels) {
      writer.uint32(10).string(v!);
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

          message.Labels.push(reader.string());
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
    return {
      Labels: globalThis.Array.isArray(object?.Labels) ? object.Labels.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Labels): unknown {
    const obj: any = {};
    if (message.Labels?.length) {
      obj.Labels = message.Labels;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Labels>, I>>(base?: I): Labels {
    return Labels.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Labels>, I>>(object: I): Labels {
    const message = createBaseLabels();
    message.Labels = object.Labels?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    String: "",
    Labels: undefined,
    Status1: 0,
    Status2: 0,
    Network: 0,
    Strings: [],
    MapString: {},
    MapMessages: {},
    Properties1: undefined,
    Properties2: undefined,
    Services: [],
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.String !== "") {
      writer.uint32(10).string(message.String);
    }
    if (message.Labels !== undefined) {
      Labels.encode(message.Labels, writer.uint32(18).fork()).ldelim();
    }
    if (message.Status1 !== 0) {
      writer.uint32(24).int32(message.Status1);
    }
    if (message.Status2 !== 0) {
      writer.uint32(32).int32(message.Status2);
    }
    if (message.Network !== 0) {
      writer.uint32(40).int32(message.Network);
    }
    for (const v of message.Strings) {
      writer.uint32(50).string(v!);
    }
    Object.entries(message.MapString).forEach(([key, value]) => {
      Message_MapStringEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    Object.entries(message.MapMessages).forEach(([key, value]) => {
      Message_MapMessagesEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.Properties1 !== undefined) {
      Properties.encode(message.Properties1, writer.uint32(90).fork()).ldelim();
    }
    if (message.Properties2 !== undefined) {
      Properties1.encode(message.Properties2, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).fork();
    for (const v of message.Services) {
      writer.int32(v);
    }
    writer.ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Labels = Labels.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.Status1 = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.Status2 = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.Network = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.Strings.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Message_MapStringEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.MapString[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Message_MapMessagesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.MapMessages[entry8.key] = entry8.value;
          }
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.Properties1 = Properties.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.Properties2 = Properties1.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag === 104) {
            message.Services.push(reader.int32() as any);

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Services.push(reader.int32() as any);
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

  fromJSON(object: any): Message {
    return {
      String: isSet(object.String) ? globalThis.String(object.String) : "",
      Labels: isSet(object.Labels) ? Labels.fromJSON(object.Labels) : undefined,
      Status1: isSet(object.Status1) ? statusFromJSON(object.Status1) : 0,
      Status2: isSet(object.Status2) ? statusFromJSON(object.Status2) : 0,
      Network: isSet(object.Network) ? message_ServiceFromJSON(object.Network) : 0,
      Strings: globalThis.Array.isArray(object?.Strings) ? object.Strings.map((e: any) => globalThis.String(e)) : [],
      MapString: isObject(object.MapString)
        ? Object.entries(object.MapString).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      MapMessages: isObject(object.MapMessages)
        ? Object.entries(object.MapMessages).reduce<{ [key: string]: Message_Message }>((acc, [key, value]) => {
          acc[key] = Message_Message.fromJSON(value);
          return acc;
        }, {})
        : {},
      Properties1: isSet(object.Properties1) ? Properties.fromJSON(object.Properties1) : undefined,
      Properties2: isSet(object.Properties2) ? Properties1.fromJSON(object.Properties2) : undefined,
      Services: globalThis.Array.isArray(object?.Services)
        ? object.Services.map((e: any) => message_ServiceFromJSON(e))
        : [],
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.String !== "") {
      obj.String = message.String;
    }
    if (message.Labels !== undefined) {
      obj.Labels = Labels.toJSON(message.Labels);
    }
    if (message.Status1 !== 0) {
      obj.Status1 = statusToJSON(message.Status1);
    }
    if (message.Status2 !== 0) {
      obj.Status2 = statusToJSON(message.Status2);
    }
    if (message.Network !== 0) {
      obj.Network = message_ServiceToJSON(message.Network);
    }
    if (message.Strings?.length) {
      obj.Strings = message.Strings;
    }
    if (message.MapString) {
      const entries = Object.entries(message.MapString);
      if (entries.length > 0) {
        obj.MapString = {};
        entries.forEach(([k, v]) => {
          obj.MapString[k] = v;
        });
      }
    }
    if (message.MapMessages) {
      const entries = Object.entries(message.MapMessages);
      if (entries.length > 0) {
        obj.MapMessages = {};
        entries.forEach(([k, v]) => {
          obj.MapMessages[k] = Message_Message.toJSON(v);
        });
      }
    }
    if (message.Properties1 !== undefined) {
      obj.Properties1 = Properties.toJSON(message.Properties1);
    }
    if (message.Properties2 !== undefined) {
      obj.Properties2 = Properties1.toJSON(message.Properties2);
    }
    if (message.Services?.length) {
      obj.Services = message.Services.map((e) => message_ServiceToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.String = object.String ?? "";
    message.Labels = (object.Labels !== undefined && object.Labels !== null)
      ? Labels.fromPartial(object.Labels)
      : undefined;
    message.Status1 = object.Status1 ?? 0;
    message.Status2 = object.Status2 ?? 0;
    message.Network = object.Network ?? 0;
    message.Strings = object.Strings?.map((e) => e) || [];
    message.MapString = Object.entries(object.MapString ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.MapMessages = Object.entries(object.MapMessages ?? {}).reduce<{ [key: string]: Message_Message }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Message_Message.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.Properties1 = (object.Properties1 !== undefined && object.Properties1 !== null)
      ? Properties.fromPartial(object.Properties1)
      : undefined;
    message.Properties2 = (object.Properties2 !== undefined && object.Properties2 !== null)
      ? Properties1.fromPartial(object.Properties2)
      : undefined;
    message.Services = object.Services?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessage_Message(): Message_Message {
  return { String: "", Messages: {} };
}

export const Message_Message = {
  encode(message: Message_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.String !== "") {
      writer.uint32(10).string(message.String);
    }
    Object.entries(message.Messages).forEach(([key, value]) => {
      Message_Message_MessagesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.String = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Message_Message_MessagesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.Messages[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Message {
    return {
      String: isSet(object.String) ? globalThis.String(object.String) : "",
      Messages: isObject(object.Messages)
        ? Object.entries(object.Messages).reduce<{ [key: string]: Message_Message }>((acc, [key, value]) => {
          acc[key] = Message_Message.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Message_Message): unknown {
    const obj: any = {};
    if (message.String !== "") {
      obj.String = message.String;
    }
    if (message.Messages) {
      const entries = Object.entries(message.Messages);
      if (entries.length > 0) {
        obj.Messages = {};
        entries.forEach(([k, v]) => {
          obj.Messages[k] = Message_Message.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Message>, I>>(base?: I): Message_Message {
    return Message_Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Message>, I>>(object: I): Message_Message {
    const message = createBaseMessage_Message();
    message.String = object.String ?? "";
    message.Messages = Object.entries(object.Messages ?? {}).reduce<{ [key: string]: Message_Message }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Message_Message.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMessage_Message_Message(): Message_Message_Message {
  return { Strings: [], Timestamp: undefined };
}

export const Message_Message_Message = {
  encode(message: Message_Message_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Strings) {
      writer.uint32(10).string(v!);
    }
    if (message.Timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.Timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_Message_Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Message_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Strings.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Message_Message {
    return {
      Strings: globalThis.Array.isArray(object?.Strings) ? object.Strings.map((e: any) => globalThis.String(e)) : [],
      Timestamp: isSet(object.Timestamp) ? fromJsonTimestamp(object.Timestamp) : undefined,
    };
  },

  toJSON(message: Message_Message_Message): unknown {
    const obj: any = {};
    if (message.Strings?.length) {
      obj.Strings = message.Strings;
    }
    if (message.Timestamp !== undefined) {
      obj.Timestamp = message.Timestamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Message_Message>, I>>(base?: I): Message_Message_Message {
    return Message_Message_Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Message_Message>, I>>(object: I): Message_Message_Message {
    const message = createBaseMessage_Message_Message();
    message.Strings = object.Strings?.map((e) => e) || [];
    message.Timestamp = object.Timestamp ?? undefined;
    return message;
  },
};

function createBaseMessage_Message_MessagesEntry(): Message_Message_MessagesEntry {
  return { key: "", value: undefined };
}

export const Message_Message_MessagesEntry = {
  encode(message: Message_Message_MessagesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Message_Message.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_Message_MessagesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Message_MessagesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Message_Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Message_MessagesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Message_Message.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Message_Message_MessagesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Message_Message.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Message_MessagesEntry>, I>>(base?: I): Message_Message_MessagesEntry {
    return Message_Message_MessagesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Message_MessagesEntry>, I>>(
    object: I,
  ): Message_Message_MessagesEntry {
    const message = createBaseMessage_Message_MessagesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Message_Message.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMessage_MapStringEntry(): Message_MapStringEntry {
  return { key: "", value: "" };
}

export const Message_MapStringEntry = {
  encode(message: Message_MapStringEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_MapStringEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_MapStringEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_MapStringEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Message_MapStringEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_MapStringEntry>, I>>(base?: I): Message_MapStringEntry {
    return Message_MapStringEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_MapStringEntry>, I>>(object: I): Message_MapStringEntry {
    const message = createBaseMessage_MapStringEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMessage_MapMessagesEntry(): Message_MapMessagesEntry {
  return { key: "", value: undefined };
}

export const Message_MapMessagesEntry = {
  encode(message: Message_MapMessagesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Message_Message.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_MapMessagesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_MapMessagesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Message_Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_MapMessagesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Message_Message.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Message_MapMessagesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Message_Message.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_MapMessagesEntry>, I>>(base?: I): Message_MapMessagesEntry {
    return Message_MapMessagesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_MapMessagesEntry>, I>>(object: I): Message_MapMessagesEntry {
    const message = createBaseMessage_MapMessagesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Message_Message.fromPartial(object.value)
      : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
