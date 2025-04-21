import CategoryInput from "../modules/CategoryInput";
import ReportDesc from "../modules/ReportDesc";
import ReportImage from "../modules/ReportImage";
import { FaLeaf } from "react-icons/fa";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import { BsFillCloudFogFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";

export default function ReportPage() {
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
      <div className="mt-[15px]">
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
          />
          <CategoryInput
            icon={<GiEmptyWoodBucketHandle />}
            title="زباله و نظافت"
            desc="رها شدن زباله با سطل های پر و آلوده"
          />
          <CategoryInput
            icon={<BsFillCloudFogFill />}
            title="دیوار نویسی و آلودگی بصری"
            desc="نوشته ها یا تبلیغات نا زیباروی دیوارها"
          />
          <CategoryInput
            icon={<BsFillLightbulbFill />}
            title="روشنایی معابر"
            desc="چراغ خاموش یا نور کافی در خیابان"
          />
        </div>
        <div className="flex justify-center mt-[25px]">
          <button className=" bg-[#d77622] w-[180px] h-[45px] rounded-2xl ">
            ثبت گزارش
          </button>
        </div>
      </div>
    </>
  );
}
