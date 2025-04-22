"use client";
import { useMapEvents } from "react-leaflet";

export default function GetLocation({ setLocation, setAddress }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      setLocation({ lat, lon: lng });

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&lang=fa`
        );
        const data = await res.json();
        console.log(data)
        if (data && data.display_name) {
          setAddress(data.display_name);
        } else {
          setAddress("آدرس پیدا نشد");
        }
      } catch (err) {
        console.error("خطا در گرفتن آدرس:", err);
        setAddress("خطا در دریافت آدرس");
      }
    },
  });

  return null;
}
