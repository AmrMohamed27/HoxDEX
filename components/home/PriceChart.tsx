"use client";
import { PriceChartProps, PriceData } from "@/types";
import { CartesianGrid, Line, LineChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const PriceChart = ({ prices, isPositive }: PriceChartProps) => {
  if (!prices) {
    console.error("No prices data found");
    return null;
  }
  const chartConfig = {
    value: {
      label: "Price",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  // Prepare Data
  const priceDataArray: PriceData[] = prices.map((price) => ({
    timestamp: new Date(price[0]).toLocaleTimeString(), // Format the timestamp
    value: price[1], // Use the value from the price array
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-full w-full">
      <LineChart accessibilityLayer data={priceDataArray}>
        <CartesianGrid vertical={false} />

        <Line
          dataKey="value"
          type="monotone"
          stroke={`${
            isPositive ? "hsl(var(--chart-green))" : "hsl(var(--chart-red))"
          }`}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default PriceChart;
