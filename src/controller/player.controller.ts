import { Request, Response } from "express";
import { userInfo } from "os";
import { CreatePlayerInput } from "../schema/player.schema";
import { createPlayer } from "../service/player.service";

export async function createPlayerHandler(req: Request, res: Response) {
  try {
    const player = await createPlayer(req.body);
    return res.send(player);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}
