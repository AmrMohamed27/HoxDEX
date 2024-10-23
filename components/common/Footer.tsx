import { footerContent } from "@/constants";
import CallToActionInput from "./CallToActionInput";
import { Link } from "react-transition-progress/next";
const Footer = () => {
  return (
    <footer className=" w-full border-t-[1px] border-theme-gray/20 py-4 xl:py-16 px-4 md:px-8 xl:px-8 mt-16">
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-center md:items-start justify-between">
        {/* Links */}
        <div className="flex flex-row flex-wrap lg:basis-3/4 lg:gap-32 items-center xl:justify-start xl:items-start justify-center gap-4 max-xl:text-center">
          {footerContent.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 basis-full lg:basis-1/3 xl:basis-auto max-xl:items-center"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-4">
                {item.content.map((content) => (
                  <li key={content.link}>
                    <Link
                      href={content.link}
                      className="text-theme-gray hover:text-foreground"
                    >
                      {content.element}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footing */}
        <div className="flex flex-col gap-8 items-center ">
          {/* Submit for Updates Section */}
          <div className="bg-hover-blue dark:bg-black px-4 md:px-12 py-8 md:py-20 rounded-3xl flex flex-col gap-4 items-center justify-center">
            <h2 className="text-lg md:text-xl font-semibold">
              Submit for updates.
            </h2>
            <p className="text-theme-gray text-sm lg:text-base mb-8">
              Subscribe to get update and notify our exchange and products
            </p>
            <CallToActionInput>Subscribe</CallToActionInput>
          </div>
          <p>&copy; 2024 HoxDEX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
