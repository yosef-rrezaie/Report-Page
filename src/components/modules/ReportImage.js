"use client";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function ReportImage() {
  const [images, setImages] = useState([]);

  function changeHandler(e) {
    const file = e.target.files[0];
    console.log(file);
    // 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("حجم عکس بیشتر از 5 مگابایت می باشد");
      return;
    }
    let findImage = images.find((item) => item.name === file.name);
    if (findImage) {
      alert("شما این عکس را وارد کردید");
      return;
    }
    console.log(file);
    if (!file) return;

    if (images.length >= 4) {
      alert("حداکثر4 عکس می‌تونی ارسال کنی.");
      return;
    }

    setImages((prev) => [...prev, file]);
  }

  function removeHandler(name) {
    let removedArray = images.filter((item) => item.name !== name);
    setImages(removedArray)
  }

  return (
    <div>
      <h2 className="mb-[25px]">ارسال عکس ها</h2>

      <div className="flex flex-col items-center gap-[15px] border-dashed border-[2px] p-[18px]">
        <IoCloudUploadOutline className="text-[2rem]" />
        <p className="text-center font-thin text-[14px]">
          عکس های مربوط به گزارش را اینجا بکشید و رها کنید یا برای انتخاب از
          دستگاه کلیک کنید
        </p>
        <p className="text-center text-[14px]">
          حداکثر 4 تصویر | فرمت‌های مجاز: PNG , JPG | حجم هر تصویر تا 5 مگابایت
        </p>

        <label
          htmlFor="upload"
          className="bg-[#595855] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#7f7e7c] transition"
        >
          ارسال عکس
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={changeHandler}
        />
      </div>

      <div className="mt-4 flex gap-3" dir="ltr">
        {images.map((img, index) => (
          <div key={index} className=" rounded shadow relative">
            <img
              src={URL.createObjectURL(img)}
              alt={`photo-${index + 1}`}
              className="h-[50px] w-[80px] rounded"
            />
            {/* <p className="text-xs mt-1 text-center text-gray-600">{img.name}</p> */}
            <ImCross
              className="absolute top-[4px] left-[4px] text-[8px]"
              onClick={() => removeHandler(img.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
