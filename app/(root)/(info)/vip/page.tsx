import InfoHero from "@/components/common/InfoHero";
import Steps from "@/components/info/affiliate/Steps";
import { vipRequirements, vipSteps, vipTableCells } from "@/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ContactForm from "@/components/forms/ContactForm";
import { vipCheckmarkArray } from "@/constants";
import { IoIosCheckmarkCircle as Checkmark } from "react-icons/io";

const VipPage = () => {
  return (
    <div className="px-8 flex flex-col w-full gap-8 lg:gap-20">
      {/* Hero */}
      <InfoHero
        title={"VIP"}
        imageUrl={"/assets/images/vip_hero.png"}
        headerText={"HoxDEX VIP Services"}
        descriptionText={
          "HoxDEX provides a full range of exclusive privileges to VIP users"
        }
        buttonText={"Become a VIP Now"}
      />
      {/* Steps */}
      <Steps content={vipSteps} />
      {/* Table */}
      <div className="flex flex-col gap-16 md:gap-24 items-center">
        <h2 className="text-2xl xl:text-5xl max-w-[85%] font-semibold text-center">
          Lower Transaction Fee and Higher Withdrawal Limit
        </h2>
        <Table className="text-base sm:text-md md:text-base">
          <TableHeader>
            <TableRow className="uppercase text-xs *:truncate">
              <TableHead className="rounded-l-lg">VIP Tier</TableHead>
              <TableHead>Requirements</TableHead>
              <TableHead>Maker Fee</TableHead>
              <TableHead>Taker Fee</TableHead>
              <TableHead className="rounded-r-lg truncate">
                24-Hour Withdrawal Limit
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vipTableCells.map(
              ({ id, requirements, makerFee, takerFee, limit }) => (
                <TableRow key={id}>
                  <TableCell className="rounded-l-lg px-4 py-6">
                    VIP {id}
                  </TableCell>
                  <TableCell>{requirements}</TableCell>
                  <TableCell className={`${id === 5 ? "text-theme-blue" : ""}`}>
                    {makerFee}
                  </TableCell>
                  <TableCell className={`${id === 5 ? "text-theme-blue" : ""}`}>
                    {takerFee}
                  </TableCell>
                  <TableCell
                    className={`${
                      id === 5 ? "text-theme-blue" : ""
                    } rounded-r-lg`}
                  >
                    {limit}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      {/* Requirements */}
      <div className="flex flex-col gap-6">
        <h3 className="text-lg lg:text-xl font-semibold">VIP Requirements:</h3>
        <div className="flex flex-col gap-4">
          {vipRequirements.map(({ id, content }) => (
            <p key={id} className="text-theme-gray">
              {id}. {content}
            </p>
          ))}
        </div>
      </div>
      {/* Contact Us */}
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-2xl xl:text-5xl font-semibold text-center">
            VIP Program
          </h2>
          <p className="text-theme-gray max-w-[50%] text-center">
            No matter which VIP tier you are in other exchanges, you will be
            upgraded to 1 tier higher in HoxDEX. This is a surprise from HoxDEX
          </p>
        </div>
        {/* Form Section */}
        <div className="w-full flex flex-col md:flex-row gap-8 rounded-3xl bg-pure-white dark:bg-hover-gray p-4 md:p-8 lg:p-12">
          {/* Header and Checkmarks */}
          <div className="flex flex-col gap-8 max-w-[400px]">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg md:text-xl lg:text-4xl font-semibold">
                Contact Us
              </h3>
              <h3 className="text-lg md:text-xl lg:text-4xl font-semibold">
                Get Your VIP Privileges Now
              </h3>
            </div>
            {/* Checkmarks */}
            <div className="mt-4 flex flex-col gap-4">
              {vipCheckmarkArray.map(({ id, content }) => (
                <div className="flex flex-row gap-4" key={id}>
                  <Checkmark className="text-theme-blue w-6 h-6 flex-shrink-0 bg-white rounded-full mt-1" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg">{content}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default VipPage;
