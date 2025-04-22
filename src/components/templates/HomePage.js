"use client"
import { createContext, useState } from "react";
import MapPage from "./MapPage";
import ReportPage from "./ReportPage";
export const reportContext = createContext();

export default function HomePage() {
  const [report, sendReport] = useState({
    title: "",
    description: "",
    adr: "",
    category: [],
    photos: [],
  });
  return (
    <reportContext.Provider value={{ report, sendReport }}>
      <div className="flex">
        <div className="w-1/2 h-full">
          <MapPage />
        </div>
        <div className="w-1/2 h-full overflow-auto">
          <ReportPage />
        </div>
      </div>
    </reportContext.Provider>
  );
}
