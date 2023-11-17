import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { TfiArrowsVertical } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { PiClockCountdownFill } from "react-icons/pi";

interface TableDataProps {
  data: {
    account: string;
    creditReference: string;
    balance: number;
    ref: string;
    status: string;
    action: string;
  }[];
}

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "" : "bg-white"}>
          <td className="px-2 py-2">{row.account}</td>
          <td className="px-2 py-2">{row.creditReference}</td>
          <td className="px-2 py-2">{row.balance}</td>
          <td className="px-2 py-2">{row.ref}</td>
          <td className="px-2 py-3">
            <button
              className={`${
                row.status === "Active"
                  ? "px-1 rounded-[4px] border border-lime-900 bg-[#a6c79c]"
                  : row.status === "Suspend"
                  ? " px-1 rounded-[4px] border border-red-900 bg-[#e4aeae]"
                  : "px-1 rounded-[4px] border border-yellow-900 bg-[#e0ce92]"
              } flex items-center justify-center py-1 text-sm `}
            >
              <GoDotFill
                className={`${
                  row.status === "Active"
                    ? "text-green-700"
                    : row.status === "Suspend"
                    ? " text-red-700"
                    : "text-yellow-700"
                } flex items-center `}
              />
              {row.status}
            </button>
          </td>
          <td className="px-2 py-2">
            <div className="flex gap-2">
              <div className="px-1 py-1 bg-gray-300 rounded-[4px]">
                <IoMdSettings />
              </div>
              <div className="px-1 py-1 bg-gray-300 rounded-[4px]">
                <TfiArrowsVertical />
              </div>
              <div className="px-1 py-1 bg-gray-300 rounded-[4px]">
                <IoMdPerson />
              </div>
              <div className="px-1 py-1 bg-gray-300 rounded-[4px]">
                <PiClockCountdownFill />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
