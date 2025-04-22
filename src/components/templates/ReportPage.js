import CategoryInput from "../modules/CategoryInput";
import ReportDesc from "../modules/ReportDesc";
import ReportImage from "../modules/ReportImage";
import { FaLeaf } from "react-icons/fa";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import { BsFillCloudFogFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { reportContext } from "./HomePage";

export default function ReportPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { report, sendReport } = useContext(reportContext);

  const toggleCategory = (title) => {
    if (selectedCategories.includes(title)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== title));
    } else {
      setSelectedCategories((prev) => [...prev, title]);
    }
    sendReport({ ...report, ["category"]: selectedCategories });
  };

  async function send() {
    const formData = new FormData();
    for (let key in report) {
      if (Array.isArray(report[key])) {
        report[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, report[key]);
      }
    }

    const res = await fetch("/api/send-report", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <div className="mt-4 flex px-[13px]">
        <div className="w-1/2">
          <ReportDesc />
        </div>
        <div className="w-1/2">
          <ReportImage />
        </div>
      </div>
      <div className="mt-[15px] px-[13px]">
        <h2>انتخاب دسته بندی</h2>
        <p className="font-thin">
          نوع مشکلی که میخوای گزارش بدی رو انتخاب کن . این کمک میکنه گزارش
          سریعتر بررسی بشه
        </p>
        <div className="grid grid-cols-2 justify-between mt-[14px] gap-4">
          <CategoryInput
            icon={<FaLeaf />}
            title="فضای سبز و درخشان"
            desc="آسیب به درختان با وضعیت نامناسب پارک"
            onClick={() => toggleCategory("فضای سبز و درخشان")}
            isSelected={selectedCategories.includes("فضای سبز و درخشان")}
          />
          <CategoryInput
            icon={<GiEmptyWoodBucketHandle />}
            title="زباله و نظافت"
            desc="رها شدن زباله با سطل های پر و آلوده"
            onClick={() => toggleCategory("زباله و نظافت")}
            isSelected={selectedCategories.includes("زباله و نظافت")}
          />
          <CategoryInput
            icon={<BsFillCloudFogFill />}
            title="دیوار نویسی و آلودگی بصری"
            desc="نوشته ها یا تبلیغات نا زیباروی دیوارها"
            onClick={() => toggleCategory("دیوار نویسی و آلودگی بصری")}
            isSelected={selectedCategories.includes(
              "دیوار نویسی و آلودگی بصری"
            )}
          />
          <CategoryInput
            icon={<BsFillLightbulbFill />}
            title="روشنایی معابر"
            desc="چراغ خاموش یا نور کافی در خیابان"
            onClick={() => toggleCategory("روشنایی معابر")}
            isSelected={selectedCategories.includes("روشنایی معابر")}
          />
        </div>
        <div className="flex justify-center mt-[25px]">
          <button
            className=" bg-[#d77622] w-[180px] h-[45px] rounded-2xl "
            onClick={send}
          >
            ثبت گزارش
          </button>
        </div>
      </div>
    </>
  );
}
