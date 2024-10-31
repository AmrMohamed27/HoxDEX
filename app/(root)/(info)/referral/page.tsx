import InfoHero from "@/components/common/InfoHero";
import { referralCards } from "@/constants";
import Image from "next/image";

const ReferralPage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-20">
      {/* Hero */}
      <InfoHero
        title={"Referral"}
        imageUrl={"/assets/images/referral_hero.png"}
        headerText={"Refer Friends. Earn Crypto Together."}
        descriptionText={
          "Earn up to 40% commission on every trade across Pexpay Spot and Futures"
        }
        buttonText={"Refer Friends Now!"}
      />
      {/* Cards Section */}
      <div className="flex flex-col items-center gap-4 lg:gap-12">
        {/* Header */}
        <h2 className="text-2xl xl:text-5xl max-w-[60%] font-semibold text-center">
          How to refer friends and earn commission
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {referralCards.map(({ id, title, imageUrl, description }) => (
            <div
              key={id}
              className="rounded-3xl flex flex-col gap-4 p-4 bg-pure-white dark:bg-hover-gray"
            >
              {/* Image */}
              <div className="relative rounded-3xl w-full">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={400}
                  height={400}
                  className="rounded-3xl w-full h-full"
                />
                <span className="rounded-full text-lg font-bold flex items-center justify-center w-8 h-8 bg-foreground text-background absolute top-4 left-4">
                  {id}
                </span>
              </div>
              {/* Title */}
              <h3 className="text-lg lg:text-2xl font-bold">{title}</h3>
              {/* Description */}
              <p className="text-theme-gray">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
