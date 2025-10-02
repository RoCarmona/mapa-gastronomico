import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

export interface Place {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  address?: string;
  rating?: number;
}

interface MapaProps {
  places: Place[];
  onMapLoad?: (map: google.maps.Map) => void;
}

const containerStyle = {
  width: "100%",
  height: "70%",
};

// 👉 constante global para evitar warning de reload
const libraries: ("places")[] = ["places"];

const defaultCenter = { lat: -23.62, lng: -45.41 }; // fallback em Caraguá

export default function Mapa({ places, onMapLoad }: MapaProps) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY as string,
    libraries,
  });

  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={places.length > 0 ? places[0].location : defaultCenter}
      zoom={13}
      onLoad={(map) => {
        mapRef.current = map;
        if (onMapLoad) onMapLoad(map);
      }}
    >
      {/* Pinos */}
      {places.map((place) => (
        <Marker
          key={place.id}
          position={place.location}
          title={place.name}
        />
      ))}
    </GoogleMap>
  );
}
