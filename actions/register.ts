"use server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    throw new Error("500: Internal server error");
    // await dbConnect();
    // const userFound = await User.findOne({ name });
    // if (userFound) {
    //   return {
    //     error: "Email already exists!",
    //   };
    // }
    // const user = new User({
    //   name,
    //   email,
    //   password,
    // });
    // const savedUser = await user.save();
    // // Convert Mongoose document to plain object
    // const userObj = savedUser.toObject();
    // return {
    //   ok: true,
    //   ...userObj,
    //   _id: userObj._id.toString(),
    // };
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};
