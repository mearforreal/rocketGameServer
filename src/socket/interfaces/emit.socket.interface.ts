import mongoose from "mongoose";

export interface EmitVerifyUserInterface {
  id: string;
  email: string | undefined;
  name: string | undefined;
  device_id: string | undefined;
  facebook_id: string | undefined;
  coins: number | undefined;
  headpic_index: number | undefined;
}

export interface FindUserDocument extends mongoose.Document {
  email?: string | undefined;
  name?: string | undefined;
  device_id?: string | undefined;
  facebook_id?: string | undefined;
  isBot?: boolean | undefined;
  emailVerified?: boolean | undefined;
  emailConfirmationCode?: string | undefined;
  coins?: number | undefined;
  headpic_index?: number | undefined;
  createdAt: Date;
  updatedAt: Date;
}
