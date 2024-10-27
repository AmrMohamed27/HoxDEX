/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import ProtectedRoute from "@/components/common/ProtectedRouter";
import AssetBalance from "@/components/wallets/AssetBalance";
import TotalBalance from "@/components/wallets/TotalBalance";
import { coinsIds } from "@/constants";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/db";
import redisClient from "@/lib/redisClient";
import { getCoinDataUrl } from "@/lib/utils";
import User from "@/models/User";
import { getServerSession } from "next-auth";

const WalletsPage = async () => {
  // Function to fetch and cache coin prices
  const getCoinData = async (id: string) => {
    try {
      if (!redisClient.isOpen) await redisClient.connect();
      const cachedData = await redisClient.get(`coinData-${id}`);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      const url = getCoinDataUrl(id);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Error fetching data for ${id}: ${response.statusText}`
        );
      }
      const data = await response.json();
      await redisClient.set(`coinData-${id}`, JSON.stringify(data), {
        EX: 86400,
      });
      return data;
    } catch (error) {
      console.error(error);
      return null; // Handle error case, e.g., return null or default value
    }
  };

  const coinData: { [key: string]: any } = {}; // Replace 'any' with a specific type if possible

  for (const id of coinsIds) {
    const coin = await getCoinData(id);
    coinData[id] = coin; // Use the ID as the key
  }

  const session = await getServerSession(authOptions);

  if (redisClient.isOpen) {
    await redisClient.quit();
  }
  await dbConnect();
  const currentUser = await User.findOne({
    email: session?.user?.email,
  });
  if (!currentUser) {
    return <>....</>;
  }
  const balance = JSON.parse(JSON.stringify(currentUser.balance));

  return (
    <ProtectedRoute>
      <section className="px-8 min-h-screen w-full flex flex-col gap-8">
        <TotalBalance coinData={coinData} balance={balance} />
        <AssetBalance />
      </section>
    </ProtectedRoute>
  );
};

export default WalletsPage;
