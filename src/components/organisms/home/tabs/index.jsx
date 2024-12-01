import { tabsData } from "@/constants/tabs";
import React from "react";
import { TabNavigate } from "../../tab-navigator";

export const Tabs = () => {
  return <TabNavigate tabs={tabsData} />;
};
