import { Request, Response } from "express";
import {
  createRoomInput,
  deleteRoomInput,
  getRoomInput,
  updateRoomInput,
} from "../schema/room.schema";
import {
  createRoom,
  deleteRoom,
  findAndUpdateRoom,
  findRoom,
} from "../service/room.service";

export async function createRoomHandler(
  req: Request<{}, {}, createRoomInput["body"]>,
  res: Response
) {
  const body = req.body;
  const room = await createRoom(body);

  return res.send(room);
}

export async function updateRoomHandler(
  req: Request<updateRoomInput["params"], {}, updateRoomInput["body"]>,
  res: Response
) {
  const roomId = req.params.roomId;
  const room = await findRoom({ roomId });
  const update = req.body;

  if (!room) {
    res.sendStatus(404);
  }

  const updatedRoom = await findAndUpdateRoom({ roomId }, update, {
    new: true,
  });

  return res.send(updatedRoom);
}

export async function getRoomHandler(
  req: Request<getRoomInput["params"]>,
  res: Response
) {
  const roomId = req.params.roomId;
  const room = await findRoom({ roomId });

  if (!room) {
    res.sendStatus(404);
  }

  return res.send(room);
}

export async function deleteRoomHandler(
  req: Request<deleteRoomInput["params"]>,
  res: Response
) {
  const roomId = req.params.roomId;
  const room = await findRoom({ roomId });

  if (!room) {
    res.sendStatus(404);
  }

  await deleteRoom({ roomId });

  return res.sendStatus(200);
}
