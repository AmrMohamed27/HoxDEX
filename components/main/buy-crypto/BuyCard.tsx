import { buyCardsType } from "@/types";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

const BuyCard = ({ card }: { card: buyCardsType }) => {
  const { title, imageUrl, description, link } = card;
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col sm:flex-row bg-pure-white dark:bg-hover-gray rounded-2xl p-6 gap-12"
    >
      {/* Image and button */}
      <div className="flex flex-col gap-4">
        <Image src={imageUrl} alt={title} width={110} height={110} />
        <Button variant={"default"} className="font-bold min-w-48">
          Continue to {title}
        </Button>
      </div>
      {/* Text */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Buy Crypto with {title}</h3>
        <p className="text-theme-gray">{description}</p>
      </div>
    </Link>
  );
};

export default BuyCard;
