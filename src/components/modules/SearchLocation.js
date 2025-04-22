import React from "react";
import { CiSearch } from "react-icons/ci";


export default function SearchLocation() {
  return (
    <div className="relative">
      <input
        className="w-[325px] p-[8px] h-full bg-white outline-none rounded-2xl shadow-2xl placeholder:text-[12px]"
        placeholder="مکان خود را در اینجا جست و جو کنید ..."
      />
      <CiSearch className="absolute top-[30%] left-[2%]" />

    </div>
  );
}
