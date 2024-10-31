import { Button } from "@/components/ui/button";
import Image from "next/image";
import { affiliateCards } from "@/constants";
import NumberCards from "@/components/info/about/NumberCards";
import {
  benefits,
  affiliateSteps,
  growth,
  affiliateFooting,
} from "@/constants";
import BenefitCard from "@/components/info/affiliate/BenefitCard";
import Steps from "@/components/info/affiliate/Steps";

const AffiliatePage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-20">
      {/* Hero */}
      <div className="p-4 sm:p-8 xl:p-16 w-full flex flex-col md:flex-row-reverse md:items-center xl:items-start max-md:gap-8 md:justify-between relative rounded-3xl">
        <Image
          src="/assets/images/referral_banner.jpg"
          alt="Affiliate Program"
          width={1200}
          height={350}
          className="object-cover rounded-3xl w-full h-full absolute top-0 left-0 z-10"
        />
        {/* Image */}
        <Image
          src="/assets/images/affiliate_hero.png"
          alt="Affiliate Program"
          width={400}
          height={400}
          className="z-20"
        />
        {/* Content */}
        <div className="flex flex-col gap-8 items-start z-20">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-semibold">
            Affiliate Program
          </h1>
          <p>
            Become an affiliate partner and receive an uncapped, permanent
            commission starting at 40% on all trading fees paid by users you
            have referred.
          </p>
          <Button variant={"default"} className="font-bold">
            Become an affiliate
          </Button>
        </div>
      </div>
      {/* Number Cards */}
      <NumberCards content={affiliateCards} />
      {/* Benefits */}
      <BenefitCard
        content={benefits}
        imageUrl={"/assets/images/benefit-a.png"}
      />
      {/* Steps */}
      <Steps content={affiliateSteps} />
      {/* Growth */}
      <BenefitCard content={growth} imageUrl={"/assets/images/benefit-b.png"} />
      {/* Footing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {affiliateFooting.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-pure-white dark:bg-hover-gray flex flex-col items-center gap-2 md:gap-4 p-8 md:px-16 lg:px-24 text-center rounded-2xl"
          >
            <h3 className="text-xl lg:text-4xl font-semibold">{title}</h3>
            <p className="text-theme-gray">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliatePage;
