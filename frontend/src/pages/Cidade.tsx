import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Mapa, { type Place } from "../Components/Mapa";
import Sidebar from "../Components/Sidebar";
import usePlaces from "../hooks/usePlaces";

function Cidade() {
  const { nome } = useParams<{ nome: string }>();
  const navigate = useNavigate();
  const [map, setMap] = useState<google.maps.Map | null>(null);

  if (!nome) return <p>Cidade não encontrada</p>;

  // Buscar estabelecimentos pelo hook
  const places: Place[] = usePlaces(nome, map);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Topo */}
      <header style={{ padding: "10px", background: "#2c5d77", color: "white" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#c35f2b",
            border: "none",
            padding: "8px 16px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          ← Voltar
        </button>
        <h2 style={{ display: "inline-block", marginLeft: "15px" }}>{nome}</h2>
      </header>

      {/* Sidebar + Mapa */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "25%", background: "#f5f5f5", padding: "10px" }}>
          <Sidebar places={places} />
        </div>

        {/* Mapa */}
        <div style={{ flex: 1 }}>
          <Mapa places={places} onMapLoad={setMap} />
        </div>
      </div>
    </div>
  );
}

export default Cidade;
