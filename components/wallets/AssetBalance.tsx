"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useRouter } from "next/navigation";
interface AssetBalanceProps {
  coinData: any;
  balance: any;
}

const AssetBalance = ({ coinData, balance }: AssetBalanceProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg lg:text-xl font-semibold">Asset Balances</h3>
      <Table className="text-base sm:text-md md:text-base">
        <TableHeader>
          <TableRow className="uppercase">
            <TableHead className="rounded-l-lg">Asset</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead className="max-lg:hidden">24H</TableHead>
            <TableHead className="max-sm:hidden">Available Balance</TableHead>
            <TableHead className="rounded-r-lg">Total Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(coinObjects).map((id) => (
            <TableRow
              key={id}
              onClick={() => {
                router.push(`/wallets/?id=${id}`);
              }}
              className="cursor-pointer"
            >
              <TableCell className="rounded-l-lg">
                <div className="flex flex-row gap-2 items-center py-4">
                  <Image
                    src={coinData[id].image.large}
                    alt={id}
                    width={30}
                    height={30}
                    className="hidden sm:block rounded-full"
                  />
                  <span className="font-semibold">{coinObjects[id].name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-theme-gray uppercase">
                  {coinData[id].symbol}
                </span>
              </TableCell>
              <TableCell>
                <div
                  className={`${
                    coinData[id].market_data.price_change_percentage_24h >= 0
                      ? "text-theme-green"
                      : "text-theme-red"
                  } flex flex-row items-center gap-1 text-sm`}
                >
                  {coinData[id].market_data.price_change_percentage_24h >= 0 ? (
                    <ArrowUp size={18} />
                  ) : (
                    <ArrowDown size={18} />
                  )}
                  <span>
                    {coinData[
                      id
                    ].market_data.price_change_percentage_24h.toFixed(2)}
                    %
                  </span>
                </div>
              </TableCell>
              <TableCell className="max-sm:hidden">
                <div className="flex flex-col gap-1 items-start">
                  <span className="uppercase text-lg font-semibold">
                    {balance[id]}
                  </span>
                  <span className="text-sm font-semibold text-theme-gray">
                    {"$"}
                    {balance[id] * coinData[id].market_data.current_price.usd}
                  </span>
                </div>
              </TableCell>
              <TableCell className="max-sm:hidden sm:rounded-r-lg md:rounded-none">
                <div className="flex flex-col gap-1 items-start">
                  <span className="uppercase text-lg font-semibold">
                    {balance[id]}
                  </span>
                  <span className="text-sm font-semibold text-theme-gray">
                    {"$"}
                    {balance[id] * coinData[id].market_data.current_price.usd}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetBalance;
