import CategoryInput from "../modules/CategoryInput";
import ReportDesc from "../modules/ReportDesc";
import ReportImage from "../modules/ReportImage";
import { useContext, useState } from "react";
import { reportContext } from "./HomePage";
import { category } from "@/utils/categoryData";
import toast from "react-hot-toast";
import ChangeMapPosition from "../modules/ChangeMapPosition";

export default function ReportPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { report, sendReport } = useContext(reportContext);

  const toggleCategory = (title) => {
    if (selectedCategories.includes(title)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== title));
    } else {
      setSelectedCategories((prev) => [...prev, title]);
    }
    sendReport({...report , ["category"] : selectedCategories})

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
    if(data.message) toast.success(data.message)
  }

  return (
    <>
      <div className="mt-4 flex px-[13px] max-[540px]:block ">
        <div className="w-1/2 max-sm:w-full  max-[540px]:w-full max-[540px]:block">
          <ReportDesc />
        </div>
        <div>
          <ChangeMapPosition/>
        </div>
        <div className="w-1/2 max-[540px]:w-full max-[540px]:block">
          <ReportImage />
        </div>
      </div>
      
      <div className="mt-[15px] px-[13px]">
        <h2>انتخاب دسته بندی</h2>
        <p className="font-thin max-[540px]:text-center">
          نوع مشکلی که میخوای گزارش بدی رو انتخاب کن . این کمک میکنه گزارش
          سریعتر بررسی بشه
        </p>
        <div className="grid grid-cols-2 justify-between mt-[14px] gap-4 max-[430px]:grid-cols-1 ">
          {category.map((item) => (
            <CategoryInput
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              onClick={() => toggleCategory(item.title)}
              isSelected={selectedCategories.includes(item.title)}
            />
          ))}
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
