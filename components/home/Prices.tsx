"use server";

import { coinObjects, coinsIds } from "@/constants";
import redisClient from "@/lib/redisClient";
import { getChartDataUrl, getCoinDataUrl } from "@/lib/utils";
import CoinCard from "./CoinCard";

const Prices = async () => {
  // Function to fetch and cache coin prices
  const getCoinData = async (id: string) => {
    try {
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
  //   Function to fetch and cache coin market chart data
  const getCoinChartData = async (id: string) => {
    try {
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
      return null; // Handle error case, e.g., return null or default value
    }
  };

  const coinData: { [key: string]: any } = {}; // Replace 'any' with a specific type if possible
  const chartData: { [key: string]: any } = {}; // Replace 'any' with a specific type if possible

  for (const id of coinsIds) {
    const coin = await getCoinData(id);
    coinData[id] = coin; // Use the ID as the key
    const chart = await getCoinChartData(id);
    chartData[id] = chart; // Use the ID as the key
  }

  if (redisClient.isOpen) {
    await redisClient.quit();
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-4">
      {coinData &&
        chartData &&
        Object.keys(coinObjects).map((id) => (
          <CoinCard
            key={id}
            name={coinObjects[id].name}
            symbol={coinObjects[id].symbol}
            imageUrl={coinData[id].image.large}
            price={coinData[id].market_data.current_price.usd}
            change24h={coinData[id].market_data.price_change_percentage_24h}
            chartData={chartData[id].prices}
          />
        ))}
    </div>
  );
};

export default Prices;
