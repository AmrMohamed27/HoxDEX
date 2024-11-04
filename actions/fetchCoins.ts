"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import redisClient from "@/lib/redisClient";
import { getChartDataUrl, getCoinDataUrl } from "@/lib/utils";
import { coinsIds } from "@/constants";

export const fetchCoins = async () => {
  // Function to fetch and cache coin prices
  const getCoinData = async (id: string) => {
    try {
      if (!redisClient.isOpen) await redisClient.connect();
      const cachedData = await redisClient.get(`coinData-${id}`);
      if (cachedData) {
        console.log(`Serving from cache for ${id}`);
        return JSON.parse(cachedData);
      }
      console.log(`Fetching fresh data for ${id}`);
      const url = getCoinDataUrl(id);
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(
          `Error fetching data for ${id}: ${response.statusText}`
        );
      }
      const data = await response.json();
      await redisClient.set(`coinData-${id}`, JSON.stringify(data), {
        EX: 3600,
      });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  //   Function to fetch and cache coin market chart data
  const getCoinChartData = async (id: string) => {
    try {
      if (!redisClient.isOpen) await redisClient.connect();
      const cachedData = await redisClient.get(`chartData-${id}`);
      if (cachedData) {
        console.log(`Serving from cache for ${id}`);
        return JSON.parse(cachedData);
      }
      console.log(`Fetching fresh data for ${id}`);
      const url = getChartDataUrl(id);
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(
          `Error fetching data for ${id}: ${response.statusText}`
        );
      }
      const data = await response.json();
      await redisClient.set(`chartData-${id}`, JSON.stringify(data), {
        EX: 3600,
      });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const coinData: { [key: string]: any } = {};
  const chartData: { [key: string]: any } = {};

  for (const id of coinsIds) {
    const coin = await getCoinData(id);
    if (coin === null) {
      return null;
    }
    coinData[id] = coin;
    const chart = await getCoinChartData(id);
    if (chart === null) {
      return null;
    }
    chartData[id] = chart;
  }

  if (redisClient.isOpen) {
    await redisClient.quit();
    console.log("Redis client disconnected");
  }

  return { coinData, chartData };
};
