import { IoCloudUploadOutline } from "react-icons/io5";
export default function ReportImage() {
  return (
    <div className="">
      <h2 className="mb-[25px]">ارسال عکس ها</h2>
      <div className="flex flex-col items-center gap-[15px] border-dashed border-[2px] p-[18px]">
        <IoCloudUploadOutline className="text-[2rem]" />
        <p className="text-center font-thin text-[14px]">
          عکس های مربوط به گزارش را اینجا بکشید و رها کنید یا برای انتخاب از
          دستگاه کلیک کنید
        </p>
        <p className="text-center text-[14px]">
          حداکثر 5 تصویر | فرمت های مجاز : PNG , JPJ | حجم هر تصویر تا 5 مگابایت
        </p>
        <label
          htmlFor="upload"
          className="bg-[#595855] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#7f7e7c] transition"
        >
          ارسال عکس
        </label>
        <input id="upload" type="file" className="hidden" />
      </div>
      <div></div>
    </div>
  );
}
