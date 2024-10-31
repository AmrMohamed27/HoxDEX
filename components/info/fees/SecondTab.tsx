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
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SecondTab = ({ coinData }: any) => {
  return (
    <Table className="text-base sm:text-md md:text-base w-full font-semibold">
      <TableHeader className="bg-hover-blue text-theme-blue dark:bg-hover-gray dark:text-theme-gray hover:bg-hover-blue dark:hover:bg-hover-gray">
        <TableRow className="uppercase text-xs">
          <TableHead className="rounded-l-lg">Token</TableHead>
          <TableHead className="max-sm:hidden">Full Name</TableHead>
          <TableHead className="max-sm:hidden">Network</TableHead>
          <TableHead>Minimum Withdrawal</TableHead>
          <TableHead>Deposit Fee</TableHead>
          <TableHead className="rounded-r-lg">Withdrawal Fee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(coinObjects).map((id) => (
          <TableRow
            key={id}
            className="hover:bg-hover-blue dark:hover:bg-hover-gray"
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
                <span>{coinObjects[id].symbol}</span>
              </div>
            </TableCell>
            <TableCell className="max-sm:hidden">{coinData[id].name}</TableCell>
            <TableCell className="max-sm:hidden">BEP-20</TableCell>
            <TableCell>0 {coinObjects[id].symbol}</TableCell>
            <TableCell>0%</TableCell>
            <TableCell className="rounded-r-lg">Free</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SecondTab;
