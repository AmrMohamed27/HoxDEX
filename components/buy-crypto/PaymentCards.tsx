"use client";

import Image from "next/image";
import { paymentCards } from "@/constants";
import { useState } from "react";

const PaymentCards = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <div className="flex flex-row gap-4 flex-wrap mt-2">
      {paymentCards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`flex items-center justify-center px-4 py-1 bg-white rounded-sm border-2 cursor-pointer  ${
            activeCard === index ? "border-theme-blue" : "border-transparent"
          }`}
        >
          <Image
            src={`/assets/images/${card}`}
            alt="Pay Method"
            width={48}
            height={80}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentCards;
