import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfoHeroProps } from "@/types";

const InfoHero = ({
  title,
  imageUrl,
  headerText,
  descriptionText,
  buttonText,
}: InfoHeroProps) => {
  return (
    <div className="p-4 sm:p-8 xl:p-16 w-full flex flex-col md:flex-row-reverse md:items-center xl:items-start max-md:gap-8 md:justify-between relative rounded-3xl">
      <Image
        src="/assets/images/referral_banner.jpg"
        alt={`${title} Program`}
        width={1200}
        height={350}
        className="object-cover rounded-3xl w-full h-full absolute top-0 left-0 z-10"
      />
      {/* Image */}
      <Image
        src={imageUrl}
        alt={`${title} Program`}
        width={300}
        height={400}
        className="z-20"
      />
      {/* Content */}
      <div className="flex flex-col gap-8 items-start justify-center z-20">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl font-semibold">
          {headerText}
        </h1>
        <p>{descriptionText}</p>
        <Button variant={"default"} className="font-bold">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InfoHero;
