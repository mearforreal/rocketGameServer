import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";
import PlayerModel, { PlayerDocument } from "../models/player.model";

export async function createPlayer(
  input: DocumentDefinition<Omit<PlayerDocument, "createdAt" | "updatedAt">>
) {
  try {
    return await PlayerModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findPlayer(
  query: FilterQuery<PlayerDocument>,
  options: QueryOptions = { lean: true }
) {
  return PlayerModel.findOne(query, {}, options);
}
