import { StepsProps } from "@/types";

const Steps = ({ content }: StepsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w-full">
      {content.map(({ id, title, description }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center text-center gap-6"
        >
          {/* Number */}
          <div className="flex items-center justify-center p-8 rounded-xl bg-pure-white dark:bg-hover-gray">
            <span className="flex items-center justify-center w-10 h-10 text-lg font-bold border-2 border-theme-blue rounded-full">
              {id}
            </span>
          </div>
          {/* Title */}
          <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>
          {/* Description */}
          <p className="text-theme-gray lg:max-w-[60%]">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
