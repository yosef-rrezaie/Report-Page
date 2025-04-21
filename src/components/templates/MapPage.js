"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  return (
    <div>
      <MapContainer
      center={[35.0503078, 50.3637353]} // مختصات تهران
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        // attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.0503078, 50.3637353]}>
        <Popup>تهران</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
