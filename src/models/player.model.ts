import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface PlayerDocument extends mongoose.Document {
  email: string;
  name: string;
  device_id: string;
  facebook_id: string;
  isBot: boolean;
  emailVerified: boolean;
  emailConfirmationCode: string;
  coins: number;
  headpic_index: number;
  createdAt: Date;
  updatedAt: Date;
}

const playerSchema = new mongoose.Schema(
  {
    email: { type: String, require: false, unique: true },
    emailVerified: { type: Boolean, require: false },
    emailConfirmationCode: { type: String, require: false },
    name: { type: String, require: true },
    device_id: { type: String, require: false, unique: true },
    facebook_id: { type: String, require: false, unique: true },
    isBot: { type: Boolean, require: true },
    coins: { type: Number, require: true },
    headpic_index: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const PlayerModel = mongoose.model("Player", playerSchema);
export default PlayerModel;
