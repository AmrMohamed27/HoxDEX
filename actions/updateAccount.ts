/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const updateAccount = async (values: any) => {
  const { email, password, name } = values;
  const hashedPassword = password === "" ? "" : await bcrypt.hash(password, 10);
  try {
    await dbConnect();
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return {
        error: "User not found!",
      };
    }
    let user;
    if (password === "") {
      user = await User.findOneAndUpdate(
        { email },
        {
          name,
        },
        { new: true }
      );
    } else if (name === "") {
      user = await User.findOneAndUpdate(
        { email },
        {
          password: hashedPassword,
        },
        { new: true }
      );
    } else {
      user = await User.findOneAndUpdate(
        { email },
        {
          name,
          password: hashedPassword,
        },
        { new: true }
      );
    }
    // Convert Mongoose document to plain object
    const userObj = user.toObject();
    return {
      ok: true,
      name: userObj.name,
      _id: userObj._id.toString(),
    };
  } catch (e) {
    console.log(e);
  }
};
