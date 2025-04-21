import MapPage from "./MapPage";
import ReportPage from "./ReportPage";

export default function HomePage() {
  return (
    <div className="flex">
        <div className="w-1/2"><MapPage /></div>
        <div className="w-1/2"><ReportPage/></div>
    </div>
  )
}
