import Image from "next/image";
import { heroText } from "@/constants";
import Slides from "./Slides";
import CallToActionInput from "../common/CallToActionInput";

const Hero = () => {
  return (
    <div className="px-8 flex flex-col w-full items-start max-md:gap-8">
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between max-md:gap-4 w-full">
        {/* Image */}
        <div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={400}
            height={350}
            className="scale-75 md:scale-100"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-2">
            {heroText.header.map((item, index) => (
              <h2
                className="text-4xl xl:text-6xl font-bold text-theme-blue dark:text-white"
                key={index}
              >
                {item}
              </h2>
            ))}
          </div>
          <p className="md:max-w-[65%]">{heroText.description}</p>
        </div>
      </div>
      {/* Call to Action */}
      <CallToActionInput>Get Started</CallToActionInput>
      {/* SLides */}
      <div className="mt-16 flex items-center justify-center w-[90%]">
        <Slides />
      </div>
    </div>
  );
};

export default Hero;
