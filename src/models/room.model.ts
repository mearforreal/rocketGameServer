import mongoose from "mongoose";

export interface RoomDocument extends mongoose.Document {
  level: number;
  minimun_entry: number;
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema = new mongoose.Schema(
  {
    level: { type: Number, require: true },
    minimun_entry: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model("Room", roomSchema);
export default RoomModel;
