import { DocumentDefinition } from "mongoose";
import PlayerModel from "../../models/player.model";
import { createPlayer } from "../../service/player.service";
import { FindUserDocument } from "../interfaces/emit.socket.interface";
import { OnUserVerifyInterface } from "../interfaces/listen.socket.interface";

export async function registerUserUtil(data: OnUserVerifyInterface) {
  const INITIAL_COIN = 10000;

  let today: number = new Date().getTime();
  let newName = `user${Math.floor(today / 1000)}`;

  const playerInitData = {
    email: "",
    name: newName,
    device_id: data.device_id,
    facebook_id: "",
    isBot: false,
    emailVerified: false,
    emailConfirmationCode: "",
    coins: INITIAL_COIN,
    headpic_index: 0,
  };

  try {
    const player = await createPlayer(playerInitData);
    return player;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Find convert to EmitVerifyUserInterface
export function getPlayerDataEmit(
  data: DocumentDefinition<Omit<FindUserDocument, "createdAt" | "updatedAt">>
) {
  return {
    id: data._id.toString(),
    name: data.name,
    device_id: data.device_id,
    email: data.email,
    facebook_id: data.facebook_id,
    coins: data.coins,
    headpic_index: data.headpic_index,
  };
}
