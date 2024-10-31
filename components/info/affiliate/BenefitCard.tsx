import { BenefitCardProps } from "@/types";
import Image from "next/image";
import { IoIosCheckmarkCircle as Checkmark } from "react-icons/io";
const BenefitCard = ({ content, imageUrl }: BenefitCardProps) => {
  return (
    <div
      className={`flex mt-20 ${
        content.id % 2 === 0
          ? "flex-col-reverse md:flex-row"
          : "flex-col md:flex-row-reverse"
      } gap-4 w-full`}
    >
      {/* Text Block and Checkmarks */}
      <div className="flex flex-col gap-4">
        <span className="uppercase text-theme-gray">Become an affiliate</span>
        <h3 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
          {content.title}
        </h3>
        <p className="text-theme-gray">{content.description}</p>
        {/* Checkmarks */}
        <div className="mt-4 flex flex-col gap-4">
          {content.checkmarkItems.map(({ id, title, description }) => (
            <div className="flex flex-row gap-4" key={id}>
              <Checkmark className="text-theme-blue w-6 h-6 flex-shrink-0 bg-white rounded-full mt-1" />
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-theme-gray">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className="flex items-center justify-center">
        <Image
          src={imageUrl}
          alt="Affiliate Program"
          width={900}
          height={400}
        />
      </div>
    </div>
  );
};

export default BenefitCard;
