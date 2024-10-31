import Image from "next/image";
import { aboutText } from "@/constants";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <div className="flex flex-col w-full items-start gap-8">
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between max-md:gap-4 w-full">
        {/* Image */}
        <div>
          <Image
            src="/assets/images/about.png"
            alt="squad"
            width={700}
            height={350}
            className="scale-75 md:scale-100"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-2">
            {aboutText.header.map((item, index) => (
              <h2
                className="text-4xl xl:text-6xl font-bold text-theme-blue dark:text-white"
                key={index}
              >
                {item}
              </h2>
            ))}
          </div>
          <p className="md:max-w-[65%]">{aboutText.description}</p>
        </div>
      </div>
      {/* Call to Action */}
      <Button variant={"default"}>Join the squad</Button>
    </div>
  );
};

export default AboutHero;
