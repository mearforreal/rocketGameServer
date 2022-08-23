import { Socket } from "socket.io";
import { EmitVerifyUserInterface } from "../interfaces/emit.socket.interface";

export function EmitVerifyUser(socket: Socket, data: EmitVerifyUserInterface) {
  socket.emit("VerifyUser", { ...data, add_desc: "" });
}

export function EmitAlert(socket: Socket, msg: string) {
  socket.emit("ALERT", { msg });
}
