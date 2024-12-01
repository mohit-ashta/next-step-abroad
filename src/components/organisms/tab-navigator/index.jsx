import React, { useState } from "react";

export const TabNavigate = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <>
      <div className="container">
        <div className="flex py-24">
          <div className="flex flex-col border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 text-sm font-medium text-green border-l-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 bg-white"
                    : "border-transparent hover:text-blue-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4 bg-mirrorGreen h-[300px] w-full people-img">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`text-offWhite transition-opacity duration-300 text-xl ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
