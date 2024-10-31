import { fetchCoins } from "@/actions/fetchCoins";
import Tabs from "@/components/info/fees/Tabs";

const FeesPage = async () => {
  const res = await fetchCoins();
  if (!res) {
    return <p>An error occurred during fetching data</p>;
  }
  const { coinData } = res;
  return (
    <div className="px-8 flex flex-col w-full gap-8">
      <h1 className="text-3xl lg:text-5xl font-semibold">Fees</h1>
      <Tabs coinData={coinData} />
    </div>
  );
};

export default FeesPage;
