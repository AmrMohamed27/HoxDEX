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
      return null;
    }
  };
  //   Function to fetch and cache coin market chart data
  const getCoinChartData = async (id: string) => {
    try {
      if (!redisClient.isOpen) await redisClient.connect();
      const cachedData = await redisClient.get(`chartData-${id}`);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      const url = getChartDataUrl(id);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Error fetching data for ${id}: ${response.statusText}`
        );
      }
      const data = await response.json();
      await redisClient.set(`chartData-${id}`, JSON.stringify(data), {
        EX: 86400,
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
  }

  return { coinData, chartData };
};
