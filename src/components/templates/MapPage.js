"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchLocation from "../modules/SearchLocation";
import { useState } from "react";
import { IoNuclearOutline } from "react-icons/io5";
import ChangeView from "../modules/UpdateMap";
import GetLocation from "../modules/GetLocation";

export default function MapPage() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({
    lat: 35.0503078,
    lon: 50.3637353,
  });
  const [address, setAddress] = useState("");
  return (
    <div className="relative">
      <div className="absolute top-[20px] left-[30%] z-[1000]  p-2 rounded">
        <SearchLocation
          city={city}
          setCity={setCity}
          setLocation={setLocation}
        />
      </div>

      <MapContainer
        center={[location.lat, location.lon]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView center={location} />
        <GetLocation setLocation={setLocation} setAddress={setAddress} />

        <Marker position={[location.lat, location.lon]}>
          <Popup>تهران</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
