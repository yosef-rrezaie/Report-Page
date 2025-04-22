"use client";
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
      <div className="flex max-xl:block">
        <div className="w-1/2 h-full max-xl:w-full" >
          <MapPage desktop="hidden" />
        </div>
        <div className="w-1/2 h-full overflow-auto max-xl:w-full">
          <ReportPage />
        </div>
      </div>
    </reportContext.Provider>
  );
}
