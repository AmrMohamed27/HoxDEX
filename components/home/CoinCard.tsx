import { CoinCardProps } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import PriceChart from "./PriceChart";

const CoinCard = ({
  name,
  symbol,
  imageUrl,
  price,
  change24h,
  chartData,
}: CoinCardProps) => {
  const isPositive = change24h >= 0;
  return (
    <Card className="bg-pure-white dark:bg-hover-gray">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row items-center gap-4">
            <Image
              src={imageUrl}
              alt={name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col items-start gap-1">
                <span className="truncate">{name}</span>
                <span className="text-sm text-theme-gray">{symbol}</span>
              </div>
              <div className="flex items-center justify-center text-sm px-2 py-1 rounded-2xl bg-white dark:bg-background-gray">
                <span className="text-theme-gray dark:hover-gray">24H</span>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-between flex-row">
          <span className="font-semibold">
            {parseFloat(price.toFixed(5))} USD
          </span>
          <div
            className={`${
              isPositive ? "text-theme-green" : "text-theme-red"
            } flex flex-row items-center gap-1`}
          >
            {isPositive ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
            <span>{change24h}%</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full min-h-[100px] max-h-[200px] pt-8">
            <PriceChart prices={chartData} isPositive={isPositive} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
