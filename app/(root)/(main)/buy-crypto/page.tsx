import Image from "next/image";
import PaymentCards from "../../../../components/main/buy-crypto/PaymentCards";
import { buyCards } from "@/constants";
import BuyCard from "@/components/main/buy-crypto/BuyCard";

const BuyCryptoPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-semibold">
            Buy Crypto in One Click
          </h1>
          <p className="font-semibold">
            Pay with the currency and payment method of your choice.
          </p>
          <PaymentCards />
        </div>
        {/* Buy with Stuff */}
        <div className="flex flex-col gap-8 *:basis-full">
          {buyCards.map(({ id, title, imageUrl, description }) => (
            <BuyCard
              title={title}
              imageUrl={imageUrl}
              description={description}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCryptoPage;
