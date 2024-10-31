/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { feeTabs } from "@/constants";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = ({ coinData }: any) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col gap-8 items-start w-full">
      {/* Tab Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {feeTabs.map(({ title, id }) => (
          <div
            className={`rounded-full px-6 py-2 cursor-pointer flex items-center justify-center max-md:text-xs font-bold ${
              activeTab === id
                ? "bg-hover-blue dark:bg-button-dark-gray text-theme-blue"
                : "bg-transparent text-theme-gray hover:text-foreground hover:bg-pure-white dark:hover:bg-hover-gray "
            }`}
            key={id}
            onClick={() => handleTabChange(id)}
          >
            <span>{title}</span>
          </div>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === 1 ? <FirstTab /> : <SecondTab coinData={coinData} />}
    </div>
  );
};

export default Tabs;
