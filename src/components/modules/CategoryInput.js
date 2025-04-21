export default function CategoryInput({ icon, title, desc }) {
  return (
    <div className="flex items-center">
      <div className="text-[24px] border-[2px] border-[#725d31] border-solid p-[8px] rounded-[7px]">{icon}</div>
      <div className="mr-[14px]">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
