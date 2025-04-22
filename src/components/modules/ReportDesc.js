import SearchInput from "./SearchInput";
import { reportContext } from "../templates/HomePage";
import { useContext } from "react";

export default function ReportDesc() {
  const {report} = useContext(reportContext)
  return (
    <div className="">
      <SearchInput
        type="text"
        label="عنوان گزارش"
        desc="یک جمله کوتاه و واضح برای عنوان مشکلت بنویس"
        placeholder="مثلا : سطل زباله پر شده"
        value = {report.title}
        name="title"
      />
      <SearchInput
        type="textarea"
        label="توضیح مشکل"
        desc = "چی شده ، از کی شروع شده ، چقدر خطرناک یا آزاردهنده است"
        placeholder="سطل زباله چند روزه خالی نشده و بوی بدی ایجاد شده است"
        value = {report.description}
        name="description"

      />
      <SearchInput
        type="text"
        label="آدرس حدودی"
        placeholder="مثلا : تهران ، سعادت آباد ، میدان کاج"
        value = {report.adr}
        name="adr"
      />
    </div>
  );
}
