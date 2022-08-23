import { Express, Request, Response } from "express";
import { createPlayerHandler } from "./controller/player.controller";
import {
  createRoomHandler,
  getRoomHandler,
  updateRoomHandler,
} from "./controller/room.controller";
import validate from "./middleware/validateResource";
import { createPlayerSchema } from "./schema/player.schema";
import {
  createRoomSchema,
  getRoomSchema,
  updateRoomSchema,
} from "./schema/room.schema";

function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200));
  app.post("/api/player", createPlayerHandler);

  app.post("/api/rooms", [validate(createRoomSchema)], createRoomHandler);
  app.put("/api/rooms", [validate(updateRoomSchema)], updateRoomHandler);
  app.get("/api/rooms", [validate(getRoomSchema)], getRoomHandler);
  app.delete("/api/rooms", [validate(getRoomSchema)], getRoomHandler);
}

export default routes;
