"use client";

import Image from "next/image";
import {paymentCards} from "@/constants";

const PaymentCards = () => {

  return (
    <div className="flex flex-row gap-4 flex-wrap mt-2">
          {paymentCards.map((card, index) => (
            <div key={index} className="flex items-center justify-center px-4 py-1 bg-white rounded-sm">
              <Image src={`/assets/images/${card}`} alt="Pay Method" width={48} height={80}  />
            </div>
          ))}
        </div>
  )
}

export default PaymentCards
