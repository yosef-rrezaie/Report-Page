"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchLocation from "../modules/SearchLocation";
import { useState } from "react";
import ChangeView from "../modules/UpdateMap";
import GetLocation from "../modules/GetLocation";
import { CiLocationOn } from "react-icons/ci";

export default function MapPage() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({
    lat: 35.0503078,
    lon: 50.3637353,
  });
  const [address, setAddress] = useState("");

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-[20px] left-[50%] translate-x-[-50%] z-[1000] p-2 pl-0 rounded">
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
        zoomControl={false}
        className="w-full h-screen max-lg:h-[80vh] max-md:h-[60vh]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomright" />

        <ChangeView center={location} />
        <GetLocation setLocation={setLocation} setAddress={setAddress} />

        <Marker position={[location.lat, location.lon]}>
          <Popup>موقعیت مکانی شما</Popup>
        </Marker>
      </MapContainer>

      <div
        className="absolute bottom-[20px] left-[1%] translate-x-[1%] z-[1000] p-3 bg-[#eab343] rounded-full cursor-pointer"
        onClick={getUserLocation}
        title="دریافت موقعیت مکانی"
      >
        <CiLocationOn size={30} color="white" />
      </div>
    </div>
  );
}
