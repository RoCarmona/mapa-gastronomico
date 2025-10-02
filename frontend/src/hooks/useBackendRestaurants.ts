import { useEffect, useState } from "react";

interface Restaurant {
  _id: string;
  name: string;
  city: string;
  address?: string;
  phone?: string;
  lat: number;
  lng: number;
  category?: string;
  rating?: number;
  isActive: boolean;
}

export function useBackendRestaurants(city: string) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (!city) return;

    fetch(`http://localhost:5000/restaurants?city=${city}`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("Erro ao buscar backend:", err));
  }, [city]);

  return restaurants;
}
