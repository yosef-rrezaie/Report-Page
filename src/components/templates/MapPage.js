"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchLocation from "../modules/SearchLocation";

export default function MapPage() {
  return (
    <div className="relative">
      <div className="absolute top-[20px] left-[30%] z-[1000]  p-2 rounded">
        <SearchLocation />
      </div>

      <MapContainer
        center={[35.0503078, 50.3637353]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.0503078, 50.3637353]}>
          <Popup>تهران</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
