"use client";
import { useContext, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { reportContext } from "../templates/HomePage";
import toast, { Toaster } from "react-hot-toast";

export default function ReportImage() {
  const { report, sendReport } = useContext(reportContext);
  const [images, setImages] = useState([]);

  function handleFile(file) {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم عکس بیشتر از 5 مگابایت می‌باشد");
      return;
    }

    let exists = images.find((item) => item.name === file.name);
    if (exists) {
      toast.error("شما این عکس را وارد کردید");
      return;
    }

    if (images.length >= 4) {
      toast.error("حداکثر 4 عکس می‌تونی ارسال کنی.");
      return;
    }

    const newImages = [...images, file];
    setImages(newImages);
    sendReport({ ...report, photos: newImages });
  }

  function changeHandler(e) {
    handleFile(e.target.files[0]);
  }

  function removeHandler(name) {
    const updatedImages = images.filter((item) => item.name !== name);
    setImages(updatedImages);
    sendReport({ ...report, photos: updatedImages });
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="mb-[25px]">ارسال عکس‌ها</h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col items-center gap-[15px] border-dashed border-[2px] p-[18px] rounded-md cursor-pointer"
      >
        <IoCloudUploadOutline className="text-[2rem]" />
        <p className="text-center font-thin text-[14px]">
          عکس‌های مربوط به گزارش را اینجا بکشید و رها کنید یا برای انتخاب از
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

      <div className="mt-4 flex gap-3 flex-wrap" dir="ltr">
        {images.map((img, index) => (
          <div key={index} className="rounded shadow relative">
            <img
              src={URL.createObjectURL(img)}
              alt={`photo-${index + 1}`}
              className="h-[50px] w-[80px] rounded object-cover"
            />
            <ImCross
              className="absolute top-[4px] left-[4px] text-[10px] bg-white rounded-full p-[1px] cursor-pointer"
              onClick={() => removeHandler(img.name)}
            />
          </div>
        ))}
      </div>
      <Toaster/>
    </div>
  );
}
