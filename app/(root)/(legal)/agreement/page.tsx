import { agreement, openingParagraphs } from "@/constants/agreement";

const AgreementPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold mb-2">User Agreement</h2>
      <p className="text-theme-gray">Updated: 11/19/2023</p>
      <div className="flex flex-col gap-2 mb-4">
        {openingParagraphs.map(({ id, content }) => (
          <p key={id} className="text-theme-gray">
            {content}
          </p>
        ))}
      </div>
      {agreement.map(({ id, title, paragraphs }) => (
        <div key={id} className="flex flex-col gap-4">
          <h2 className="text-theme-gray my-4">{title}</h2>
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

export default AgreementPage;
