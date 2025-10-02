import { useEffect, useState } from "react";
import type { Place } from "../Components/Mapa";

export default function usePlaces(query: string, map: google.maps.Map | null) {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    if (!map || !query) return;

    const service = new google.maps.places.PlacesService(map);

    const request: google.maps.places.TextSearchRequest = {
      query: `${query} restaurantes`,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const formatted: Place[] = results
          .filter((p) => p.geometry?.location)
          .map((p) => ({
            id: p.place_id || Math.random().toString(),
            name: p.name || "Sem nome",
            location: {
              lat: p.geometry!.location!.lat(),
              lng: p.geometry!.location!.lng(),
            },
            address: p.formatted_address,
            rating: p.rating,
          }));

        setPlaces(formatted);
      }
    });
  }, [query, map]);

  return places;
}
