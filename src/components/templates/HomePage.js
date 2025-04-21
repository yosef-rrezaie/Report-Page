import MapPage from "./MapPage";
import ReportPage from "./ReportPage";

export default function HomePage() {
  return (
    <div className="flex">
      <div className="w-1/2 h-full">
        <MapPage />
      </div>
      <div className="w-1/2 h-full overflow-auto">
        <ReportPage />
      </div>
    </div>
  );
}
