import ReportDesc from "../modules/ReportDesc";
import ReportImage from "../modules/ReportImage";

export default function ReportPage() {
  return (
    <div className="mt-4 flex px-[6px]">
      <div className="w-1/2">
          <ReportDesc />
      </div>
      <div className="w-1/2">
        <ReportImage />
      </div>
    </div>
  );
}
