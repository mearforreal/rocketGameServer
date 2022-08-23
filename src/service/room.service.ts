import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import RoomModel, { RoomDocument } from "../models/room.model";

export async function createRoom(
  input: DocumentDefinition<Omit<RoomDocument, "createdAt" | "updatedAt">>
) {
  return RoomModel.create(input);
}

export async function findRoom(
  query: FilterQuery<RoomDocument>,
  options: QueryOptions = { lean: true }
) {
  return RoomModel.findOne(query, {}, options);
}

export async function findAndUpdateRoom(
  query: FilterQuery<RoomDocument>,
  update: UpdateQuery<RoomDocument>,
  option: QueryOptions
) {
  return RoomModel.findOneAndUpdate(query, update, option);
}

export async function deleteRoom(query: FilterQuery<RoomDocument>) {
  return RoomModel.deleteOne(query);
}

export async function findAllRoom() {
  return RoomModel.find({}).select({ level: 1, minimun_entry: 1 });
}
