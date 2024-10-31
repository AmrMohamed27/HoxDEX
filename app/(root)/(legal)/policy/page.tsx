import { privacyPolicy } from "@/constants/privacy";

const PolicyPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {privacyPolicy.map(({ id, title, description }) => (
        <div key={id} className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-theme-gray">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default PolicyPage;
