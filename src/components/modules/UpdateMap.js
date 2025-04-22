import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView([center.lat, center.lon], 14); 
    }
  }, [center]);

  return null;
}
