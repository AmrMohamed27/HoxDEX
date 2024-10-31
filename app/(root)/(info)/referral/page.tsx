import { Button } from "@/components/ui/button";
import { referralCards } from "@/constants";
import Image from "next/image";

const ReferralPage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-20">
      {/* Hero */}
      <div className="p-4 sm:p-8 xl:p-16 w-full flex flex-col md:flex-row-reverse md:items-center xl:items-start max-md:gap-8 md:justify-between relative rounded-3xl">
        <Image
          src="/assets/images/referral_banner.jpg"
          alt="Referral Program"
          width={1200}
          height={350}
          className="object-cover rounded-3xl w-full h-full absolute top-0 left-0 z-10"
        />
        {/* Image */}
        <Image
          src="/assets/images/referral_hero.png"
          alt="Referral Program"
          width={400}
          height={400}
          className="z-20"
        />
        {/* Content */}
        <div className="flex flex-col gap-8 items-start z-20">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-semibold">
            Refer Friends. Earn Crypto Together.
          </h1>
          <p>
            Earn up to 40% commission on every trade across Pexpay Spot and
            Futures
          </p>
          <Button variant={"default"} className="font-bold">
            Refer Friends Now!
          </Button>
        </div>
      </div>
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
