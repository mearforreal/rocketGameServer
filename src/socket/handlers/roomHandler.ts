import { Socket } from "socket.io";
import { findAllRoom } from "../../service/room.service";
import { onRoomEnterInterface } from "../interfaces/listen.socket.interface";

export async function onGetLobbyRooms(socket: Socket) {
  const allRoom = await findAllRoom();
  socket.emit("GAME_GET_LOBBY_ROOM", allRoom);
}

// export async function onRoomEnter(data: onRoomEnterInterface, socket: Socket) {
//   socket.join("1");
//   console.log(socket.id);

//   console.log(socket.rooms);
// }
