"use server";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withdraw = async (values: any) => {
  const { coinId, amount } = values;
  const balanceKey = `balance.${coinId}`;
  const options = { [balanceKey]: 0 - amount };
  const session = await getServerSession(authOptions);

  try {
    if (!session) throw new Error("Unauthorized");
    await dbConnect();
    await User.updateOne(
      {
        email: session?.user?.email,
      },
      { $inc: options }
    );
    return {
      ok: true,
    };
  } catch (e) {
    console.error(e);
    return {
      ok: false,
      error: e,
    };
  }
};
