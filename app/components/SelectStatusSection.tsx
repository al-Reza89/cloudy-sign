import { statusOptions } from "@/utils/data";
import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const SelectStatusSection = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (event: any) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
  };

  useEffect(() => {
    console.log(selectedStatus);
  }, [selectedStatus]);

  return (
    <div className=" ">
      <select
        onChange={handleStatusChange}
        value={selectedStatus}
        className="w-40 bg-[#fff] rounded-[5px] py-[.35rem] pr-2 h-full px-1 text-sm flex justify-between items-center "
      >
        <option value="" disabled>
          Select Status
        </option>
        {statusOptions.map((status, index) => (
          <option key={index} value={status.toLowerCase()}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStatusSection;
