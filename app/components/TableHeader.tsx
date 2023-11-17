import React from "react";
import { CgArrowsV } from "react-icons/cg";

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className="bg-[#b4afaf] rounded-t-[5px] ">
      <tr className="">
        {headers.map((header, index) => (
          <th
            key={index}
            className="text-left text-stone-700 font-normal py-2 px-2  "
          >
            <div className="flex items-center gap-2 ">
              {header}
              <CgArrowsV className="cursor-pointer" />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
