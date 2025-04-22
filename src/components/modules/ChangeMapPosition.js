"use client";
import { useEffect, useState } from "react";
import MapPage from "../templates/MapPage";

export default function ChangeMapPosition() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4">
      {width < "540" && <MapPage mobile="block"/>}
    </div>
  );
}
