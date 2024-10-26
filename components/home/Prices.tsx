"use server";

import { coinsIds } from "@/constants";
import redisClient from "@/lib/redisClient";
import { getChartDataUrl, getPricesUrl } from "@/lib/utils";

const Prices = async () => {
  // Function to fetch and cache coin prices
  const getCoinPrices = async () => {
    // Check if data exist in Redis cache
    const cachedData = await redisClient.get("prices");
    // If data is found in Redis cache
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    // If data is not found, fetch from CoinGecko API
    const url = getPricesUrl();
    const response = await fetch(url);
    const data = await response.json();

    // Store the fetched data in Redis with a TTL (time to live) of 24 hours (86400 seconds)
    await redisClient.set("prices", JSON.stringify(data), {
      EX: 86400, // TTL in seconds
    });

    return data;
  };
  //   Function to fetch and cache coin market chart data
  const getCoinChartData = async (id: string) => {
    // Check if data exist in Redis cache
    const cachedData = await redisClient.get(`chartData-${id}`);
    // If data is found in Redis cache
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    // If data is not found, fetch from CoinGecko API
    const url = getChartDataUrl(id);
    const response = await fetch(url);
    const data = await response.json();

    // Store the fetched data in Redis with a TTL (time to live) of 24 hours (86400 seconds)
    await redisClient.set(`chartData-${id}`, JSON.stringify(data), {
      EX: 86400, // TTL in seconds
    });

    return data;
  };

  const pricesData = await getCoinPrices();
  const chartData = coinsIds.map(async (id) => await getCoinChartData(id));
  return <div></div>;
};

export default Prices;
