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
import InfoHero from "@/components/common/InfoHero";

const AffiliatePage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-20">
      {/* Hero */}
      <InfoHero
        title={"Affiliate"}
        imageUrl={"/assets/images/affiliate_hero.png"}
        headerText={"Affiliate Program"}
        descriptionText="Become an affiliate partner and receive an uncapped, permanent commission starting at 40% on all trading fees paid by users you have referred."
        buttonText="Become an affiliate"
      />
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
