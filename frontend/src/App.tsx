import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cidade from "./pages/Cidade";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      {/* Página inicial com os botões das cidades */}
      <Route path="/" element={<Home />} />

      {/* Página do mapa para cada cidade */}
      <Route path="/cidade/:nome" element={<Cidade />} />

      {/* Rota do painel administrativo */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
