import { coinObjects } from "@/constants";
import CoinCard from "./CoinCard";
import { fetchCoins } from "@/actions/fetchCoins";

const Prices = async () => {
  const res = await fetchCoins();
  if (!res) {
    return <p>An error occurred during fetching data</p>;
  }
  const { coinData, chartData } = res;
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-4">
      {Object.keys(coinObjects).map((id) => (
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
