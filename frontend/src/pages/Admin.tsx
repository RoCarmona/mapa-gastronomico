import RestaurantForm from "../Components/RestaurantForm";

export default function Admin() {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Painel Administrativo</h2>
      <p>Cadastre ou atualize restaurantes parceiros do Guia do Litoral Norte</p>

      <RestaurantForm cidade="Caraguatatuba" onSuccess={() => alert("Restaurante cadastrado!")} />
    </div>
  );
}
