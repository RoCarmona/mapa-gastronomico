import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Mapa Gastronômico Guia do Litoral Norte</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button onClick={() => navigate("/cidade/Caraguatatuba")}>Caraguatatuba</button>
        <button onClick={() => navigate("/cidade/Ubatuba")}>Ubatuba</button>
        <button onClick={() => navigate("/cidade/SaoSebastiao")}>São Sebastião</button>
        <button onClick={() => navigate("/cidade/Ilhabela")}>Ilhabela</button>
      </div>
    </div>
  );
}
