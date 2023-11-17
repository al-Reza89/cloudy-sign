import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { tableData, tableHeaders } from "@/utils/data";

const TableSection = () => {
  return (
    <div className=" mt-3">
      <table className="table-auto sm:min-w-full overflow-x-scroll ">
        <TableHeader headers={tableHeaders} />
        <TableData data={tableData} />
      </table>
    </div>
  );
};

export default TableSection;
