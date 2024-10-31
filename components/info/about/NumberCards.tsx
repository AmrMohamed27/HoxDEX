import { aboutCards } from "@/constants";

const NumberCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16">
      {aboutCards.map(({ id, title, description }) => (
        <div
          className="rounded-xl p-12 bg-pure-white dark:bg-hover-gray flex flex-col items-center justify-center gap-6"
          key={id}
        >
          <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
          <p className="text-theme-gray">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberCards;
