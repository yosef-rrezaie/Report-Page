import SearchInput from "./SearchInput";

export default function ReportDesc() {
  return (
    <div className="">
      <SearchInput
        type="text"
        label="عنوان گزارش"
        desc="یک جمله کوتاه و واضح برای عنوان مشکلت بنویس"
        placeholder="مثلا : سطل زباله پر شده"
      />
      <SearchInput
        type="textarea"
        label="توضیح مشکل"
        desc = "چی شده ، از کی شروع شده ، چقدر خطرناک یا آزاردهنده است"
        placeholder="سطل زباله چند روزه خالی نشده و بوی بدی ایجاد شده است"
      />
      <SearchInput
        type="text"
        label="آدرس حدودی"
        placeholder="مثلا : تهران ، سعادت آباد ، میدان کاج"
      />
    </div>
  );
}
