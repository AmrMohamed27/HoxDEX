"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { coinObjects } from "@/constants";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import PriceChart from "../home/PriceChart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PricesTable = ({ coinData, chartData }: any) => {
  Object.keys(coinObjects).map((id) => console.log(chartData));
  return (
    <Table className="text-base sm:text-md md:text-base">
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="rounded-l-lg">Token</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24H</TableHead>
          <TableHead className="max-sm:hidden">Market Cap</TableHead>
          <TableHead className="max-sm:hidden sm:rounded-r-lg md:rounded-none">
            Volume
          </TableHead>
          <TableHead className="md:rounded-r-lg max-md:hidden">Chart</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(coinObjects).map((id) => (
          <TableRow key={id}>
            <TableCell className="rounded-l-lg">
              <div className="flex flex-row gap-2 items-center py-4">
                <Image
                  src={coinData[id].image.large}
                  alt={id}
                  width={30}
                  height={30}
                  className="hidden sm:block rounded-full"
                />
                <span>{coinObjects[id].name}</span>
              </div>
            </TableCell>
            <TableCell>
              {"$"}
              {coinData[id].market_data.current_price.usd}
            </TableCell>
            <TableCell>
              <div
                className={`${
                  coinData[id].market_data.price_change_percentage_24h >= 0
                    ? "text-theme-green"
                    : "text-theme-red"
                } flex flex-row items-center gap-1`}
              >
                {coinData[id].market_data.price_change_percentage_24h >= 0 ? (
                  <ArrowUp size={18} />
                ) : (
                  <ArrowDown size={18} />
                )}
                <span>
                  {coinData[id].market_data.price_change_percentage_24h}%
                </span>
              </div>
            </TableCell>
            <TableCell className="max-sm:hidden">
              ${coinData[id].market_data.market_cap.usd.toLocaleString()}
            </TableCell>
            <TableCell className="max-sm:hidden sm:rounded-r-lg md:rounded-none">
              ${coinData[id].market_data.total_volume.usd.toLocaleString()}
            </TableCell>
            <TableCell className="max-md:hidden md:rounded-r-lg">
              <div className="w-full min-h-[20px] max-w-[200px]">
                <PriceChart
                  prices={chartData[id].prices}
                  isPositive={
                    coinData[id].market_data.price_change_percentage_24h >= 0
                  }
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PricesTable;
