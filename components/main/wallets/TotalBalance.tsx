"use client";
import {
  BsArrowUpRightCircle as ArrowUpRight,
  BsArrowDownLeftCircle as ArrowDownLeft,
} from "react-icons/bs";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";
import Image from "next/image";
import { TotalBalanceProps } from "@/types";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import DepositForm from "../../forms/DepositForm";
import WithdrawForm from "../../forms/WithdrawForm";

const TotalBalance = ({ coinData, balance }: TotalBalanceProps) => {
  // get coinId from URL
  const searchParams = useSearchParams();
  const coinId = searchParams.has("id") ? searchParams.get("id")! : "bitcoin";
  // get coin data from props
  const price = coinData[coinId].market_data.current_price.usd;
  const symbol = coinData[coinId].symbol;
  const currentBalance = balance[coinId];
  // calculate balance in USD
  const balanceInUSD = (price * currentBalance).toFixed(2);
  return (
    <div className="p-4 lg:p-8 bg-pure-white dark:bg-hover-gray flex flex-col gap-12 rounded-2xl">
      {/* Header and Buttons */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-lg:gap-4">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg lg:text-xl font-semibold">Total Balance</h3>
          <div className="flex flex-row gap-2 items-end">
            <span className="text-xl lg:text-4xl font-semibold flex items-end">
              {currentBalance}
            </span>
            <span className="text-white bg-theme-yellow px-4 py-1 rounded-full font-semibold uppercase">
              {symbol}
            </span>
          </div>
          <span className="text-theme-gray font-semibold lg:text-lg">
            {balanceInUSD} USD
          </span>
        </div>
        {/* Buttons */}
        <div className="flex flex-row gap-2">
          {/* Withdraw Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"default"} className="font-semibold lg:text-lg">
                <ArrowUpRight />
                <span>Withdraw</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Withdraw</DialogTitle>
              </DialogHeader>
              {/* Form */}
              <WithdrawForm coinData={coinData} balance={balance} />
            </DialogContent>
          </Dialog>
          {/* Deposit Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="font-semibold lg:text-lg">
                <ArrowDownLeft />
                <span>Deposit</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Deposit</DialogTitle>
              </DialogHeader>
              {/* Form */}
              <DepositForm coinData={coinData} balance={balance} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Bars and balances */}
      <div className="flex flex-col lg:flex-row-reverse lg:justify-end gap-8">
        {/* Progress Bars */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-theme-gray text-sm">Asset Balance</span>
            <Progress
              value={10}
              color={"bg-theme-purple"}
              className="max-w-[100px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-theme-gray text-sm">Exchange Balance</span>
            <Progress
              value={10}
              color={"bg-button-blue"}
              className="max-w-[100px]"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col sm:flex-row max-lg:w-full gap-4">
          <div className="px-6 py-4 flex flex-row gap-2 rounded-xl border-2 border-theme-gray/20 items-start min-w-[300px] xl:min-w-[300px]">
            <Image
              src="/assets/images/balance-purple.svg"
              alt="Asset Balance"
              width={30}
              height={30}
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-theme-gray font-semibold text-sm">
                Asset Balance
              </h4>
              <span className="text-lg font-semibold uppercase">
                {currentBalance} {symbol}
              </span>
              <span className="text-theme-green">{balanceInUSD} USD</span>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row gap-2 rounded-xl border-2 border-theme-gray/20 items-start min-w-[300px] xl:min-w-[300px]">
            <Image
              src="/assets/images/balance-blue.svg"
              alt="Exchange Balance"
              width={30}
              height={30}
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-theme-gray font-semibold text-sm">
                Exchange Balance
              </h4>
              <span className="text-lg font-semibold uppercase">
                {currentBalance} {symbol}
              </span>
              <span className="text-theme-green">{balanceInUSD} USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
