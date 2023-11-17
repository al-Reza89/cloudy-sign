/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TableUpperSection from "./components/TableUpperSection";
import TableSection from "./components/TableSection";

export default function Home() {
  return (
    <main className="   ">
      <div className="max-w-7xl mx-auto  px-2 ">
        <TableUpperSection />
        <TableSection />
      </div>
    </main>
  );
}
