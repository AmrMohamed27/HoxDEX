import AboutHero from "@/components/info/about/AboutHero";
import NumberCards from "@/components/info/about/NumberCards";
import { aboutTextBlocks } from "@/constants";

const AboutPage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-16">
      <AboutHero />
      <NumberCards />
      {/* Text Blocks */}
      <div className="flex flex-col md:flex-row gap-6 mt-16">
        {aboutTextBlocks.map(({ id, title, description }) => (
          <div className="flex flex-col gap-4" key={id}>
            <h3 className="text-2xl font-semibold uppercase">{title}</h3>
            <p className="text-theme-gray">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
