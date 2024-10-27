/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";
import { coinsIds } from "@/constants";

// Dynamically generate balance schema
const balanceSchema = coinsIds.reduce((acc: { [key: string]: any }, coinId) => {
  acc[coinId] = { type: Number, default: 0 };
  return acc;
}, {});

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    balance: balanceSchema,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = models.User || model("User", userSchema);
export default User;
