export default function CategoryInput({
  icon,
  title,
  desc,
  onClick,
  isSelected,
}) {
  return (
    <div
      className={`flex items-center cursor-pointer transition p-2 rounded-xl ${
        isSelected ? "text-[#0bbca4]" : null
      }`}
      onClick={onClick}
    >
      <div
        className={`text-[24px] border-[2px] ${
          isSelected ? "border-[#d77622]" : "border-[#725d31]"
        } border-solid p-[8px] rounded-[7px]`}
      >
        {icon}
      </div>
      <div className="mr-[14px]">
        <p className="">{title}</p>
        <p className="text-sm font-thin">{desc}</p>
      </div>
    </div>
  );
}
