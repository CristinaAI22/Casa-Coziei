import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// 🔹 Set the fixed location for Casa Coziei
const placeLocation = {
  lat: 45.334479,
  lng: 24.281510,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Your API Key
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={placeLocation} zoom={15}>
      <Marker position={placeLocation} />
    </GoogleMap>
  );
};

export default Location;
