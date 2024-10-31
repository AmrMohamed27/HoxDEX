import { fetchCoins } from "@/actions/fetchCoins";
import ProtectedRoute from "@/components/common/ProtectedRouter";
import AssetBalance from "@/components/main/wallets/AssetBalance";
import TotalBalance from "@/components/main/wallets/TotalBalance";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";

const WalletsPage = async () => {
  const res = await fetchCoins();
  if (!res) {
    return <p>An error occurred during fetching data</p>;
  }
  const { coinData } = res;
  const session = await getServerSession(authOptions);
  await dbConnect();
  const currentUser = await User.findOne({
    email: session?.user?.email,
  });
  if (!currentUser) {
    return <>....</>;
  }
  const balance = JSON.parse(JSON.stringify(currentUser.balance));

  return (
    <ProtectedRoute>
      <section className="px-8 min-h-screen w-full flex flex-col gap-8">
        <TotalBalance coinData={coinData} balance={balance} />
        <AssetBalance coinData={coinData} balance={balance} />
      </section>
    </ProtectedRoute>
  );
};

export default WalletsPage;
