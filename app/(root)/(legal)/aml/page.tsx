import { policy } from "@/constants/cft";

const AmlPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {policy.map(({ id, title, paragraphs }) => (
        <div key={id} className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex flex-col gap-2">
            {paragraphs.map((p, index) => (
              <p key={index} className="text-theme-gray">
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmlPage;
