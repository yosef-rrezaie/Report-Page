import { useContext } from "react";
import { reportContext } from "../templates/HomePage";

export default function SearchInput({
  type,
  label,
  desc,
  placeholder,
  value,
  name,
}) {
  const { report, sendReport } = useContext(reportContext);
  function changeHandler(e) {
    sendReport({ ...report, [e.target.name]: e.target.value });
  }

  return (
    <div className="mb-[15px]">
      <label className="text-[20px]">
        {label}
        {desc ? (
          <p className="text-[14px] mt-[5px] font-thin"> {desc} </p>
        ) : null}
      </label>
      {type === "textarea" ? (
        <>
          <textarea
            placeholder={[placeholder]}
            className="mt-[10px] outline-none border-[2px] border-[#725d31] border-solid rounded-2xl w-[90%] p-[8px] placeholder:p-[8px] placeholder:text-[12px]
            max-[540px]:w-[100%]"
            value={value}
            name={name}
            onChange={changeHandler}
          ></textarea>
        </>
      ) : (
        <input
          type={type}
          placeholder={[placeholder]}
          className="mt-[10px] outline-none border-[2px] border-[#725d31] border-solid rounded-2xl w-[90%] p-[8px] placeholder:p-[8px] placeholder:text-[12px]
           max-[540px]:w-[100%]"
          value={value}
          name={name}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}
