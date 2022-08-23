import { findPlayer } from "../../service/player.service";
import { OnUserVerifyInterface } from "../interfaces/listen.socket.interface";
import {
  getPlayerDataEmit,
  registerUserUtil,
} from "../utils/player.socket.utils";
import { Socket } from "socket.io";
import { EmitAlert, EmitVerifyUser } from "./emits";
import { findAllRoom } from "../../service/room.service";

export async function onUserRegisterHandler(
  data: OnUserVerifyInterface,
  socket: Socket
) {
  try {
    const playerRegisterEmitData = await registerUserUtil(data);
    let dataEmit = getPlayerDataEmit(playerRegisterEmitData);
    EmitVerifyUser(socket, dataEmit);
  } catch (error) {
    //Emit erro
    EmitAlert(socket, "Error occured");
  }
}

export async function onVerfiyUserHandler(
  data: OnUserVerifyInterface,
  socket: Socket
) {
  const playerVerify = await findPlayer({ device_id: data.device_id });
  if (!playerVerify) {
    //emit
    onUserRegisterHandler(data, socket);
    return;
  }
  let dataEmit = getPlayerDataEmit(playerVerify);
  EmitVerifyUser(socket, dataEmit);
}
