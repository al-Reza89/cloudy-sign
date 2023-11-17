"use client";
import React from "react";
import SelectStatusSection from "./SelectStatusSection";
import AddUserSection from "./AddUserSection";
import { FaMicrophone } from "react-icons/fa";

const TableUpperSection = () => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-[#2c195f] text-white pl-1 py-1 ">
        <FaMicrophone /> News
      </div>
      <div className="flex justify-between py-2  ">
        <SelectStatusSection />
        <AddUserSection />
      </div>
    </div>
  );
};

export default TableUpperSection;
