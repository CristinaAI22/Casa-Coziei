import REact from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle= {
  width: "100%",
  height: "400px",
};

// coordinates for Casa Coziei

const center = {
  lat: 45.334479,  // Latitude
  lng: 24.281510,  // Longitude
};

const Location = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAra9SO2dfFmwrHGK-1ihn6AQNUc8XnRag">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center} // Set map center to CasaCoziei coordinates
        zoom={15} // Adjust zoom level as per your need
      >
        <Marker position={center} /> {/* Add a marker at CasaCoziei location */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Location;