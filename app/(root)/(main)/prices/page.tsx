import { fetchCoins } from "@/actions/fetchCoins";
import PricesTable from "@/components/main/prices/PricesTable";

const PricesPage = async () => {
  const res = await fetchCoins();
  if (!res) {
    return <p>An error occurred during fetching data</p>;
  }
  const { coinData, chartData } = res;
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
