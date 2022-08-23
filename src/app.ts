import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import { Server } from "socket.io";
import { createServer } from "http";
import {
  onUserRegisterHandler,
  onVerfiyUserHandler,
} from "./socket/handlers/playerHandler";
import { onGetLobbyRooms } from "./socket/handlers/roomHandler";

const app = express();
app.use(express.json());
const port = config.get<number>("port");
app.set("port", port);
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin"],
    credentials: true,
  },
  allowEIO3: true,
});

io.on("connection", (socket) => {
  logger.info("SOCKET connected");
  socket.on("UserRegister", (data) => {
    onUserRegisterHandler(data, socket);
  });

  socket.on("VerifyUser", (data) => {
    onVerfiyUserHandler(data, socket);
  });

  socket.on("GET_LOBBY_ROOMS", () => {
    onGetLobbyRooms(socket);
  });

  socket.on("Room", (data) => {
    onRoomEnter(data, socket);
  });
});

httpServer.listen(port, async () => {
  logger.info(`App is running at: ${port}`);

  await connect();

  routes(app);
});
