import { type } from "os";
import { object, number, string, TypeOf } from "zod";
const payload = {
  body: object({
    level: number({
      required_error: "Level is required",
    }),
    minimun_entry: number({
      required_error: "Minimun Entry is required",
    }),
  }),
};

const params = {
  params: object({
    roomId: string({
      required_error: "Room ID is required",
    }),
  }),
};

export const createRoomSchema = object({
  ...payload,
});

export const updateRoomSchema = object({
  ...payload,
  ...params,
});

export const deleteRoomSchema = object({
  ...params,
});

export const getRoomSchema = object({
  ...params,
});

export type createRoomInput = TypeOf<typeof createRoomSchema>;
export type updateRoomInput = TypeOf<typeof updateRoomSchema>;
export type deleteRoomInput = TypeOf<typeof deleteRoomSchema>;
export type getRoomInput = TypeOf<typeof getRoomSchema>;
