import React from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

export default function SearchLocation({ city, setCity, setLocation }) {
  console.log(city);
  async function searchHandler() {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://nominatim.openstreetmap.org/search?q=${city}&format=json`
    );
    const data = await res.json();
    console.log(data);
    if (data.length > 0) {
      const firstResult = data[0];
      setLocation({ lat: firstResult.lat, lon: firstResult.lon });
      // onSelect && onSelect(firstResult); // ارسال به MapPage
    } else {
      toast.error("مکانی پیدا نشد");
    }
  }
  return (
    <div className="relative">
      <input
        className="w-[325px] p-[8px] h-full bg-white outline-none rounded-2xl shadow-2xl placeholder:text-[12px] max-[470px]:w-[280px] 
        max-[370px]:w-[240px] max-[310px]:w-[200px] max-[310px]:placeholder:text-[10px]"
        placeholder="مکان خود را در اینجا جست و جو کنید ..."
        onChange={(e) => setCity(e.target.value)}
      />
      <CiSearch
        className="absolute top-[30%] left-[2%]"
        onClick={searchHandler}
      />
    </div>
  );
}
