/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import PricesTable from "@/components/prices/PricesTable";
import { coinsIds } from "@/constants";
import redisClient from "@/lib/redisClient";
import { getChartDataUrl, getCoinDataUrl } from "@/lib/utils";

const PricesPage = async () => {
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

  if (!coinData || !chartData) {
    return <p>An error occurred during fetching data</p>;
  }
  return (
    <section className="px-8 min-h-screen w-full flex flex-col gap-8">
      {/* Header */}
      <h2 className="text-lg font-semibold">
        Today&apos;s Cryptocurrency Prices
      </h2>
      {/* Table */}
      <div className="">
        <PricesTable coinData={coinData} chartData={chartData} />
      </div>
    </section>
  );
};

export default PricesPage;
