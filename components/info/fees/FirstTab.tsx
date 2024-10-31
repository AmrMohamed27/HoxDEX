import { feeTabs } from "@/constants";

const FirstTab = () => {
  const { content } = feeTabs[0];
  if (!content) return <div>Error in content</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {content.map(({ id, title, description }) => (
        <div
          className="flex flex-col gap-6 items-start rounded-3xl bg-pure-white dark:bg-hover-gray px-6 py-4"
          key={id}
        >
          <div className="flex flex-col gap-0 ">
            <h3 className="text-theme-gray">{title}</h3>
            <span className="text-lg font-semibold">0.10%</span>
          </div>
          <p className="text-theme-gray">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default FirstTab;
