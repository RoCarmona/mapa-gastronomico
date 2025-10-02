import { useState } from "react";

interface RestaurantFormProps {
  onSuccess: () => void;
  cidade: string;
}

export default function RestaurantForm({ onSuccess, cidade }: RestaurantFormProps) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    category: "",
    rating: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      city: cidade,
      rating: parseFloat(form.rating),
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
      isActive: true,
    };

    await fetch("http://localhost:5000/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setForm({
      name: "",
      address: "",
      phone: "",
      category: "",
      rating: "",
      lat: "",
      lng: "",
    });

    onSuccess(); // recarrega lista no mapa
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
        padding: "10px",
        background: "#fafafa",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>Cadastrar Restaurante</h3>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Endereço" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefone" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoria (ex: Pizzaria)" />
      <input name="rating" value={form.rating} onChange={handleChange} placeholder="Avaliação (ex: 4.5)" />
      <input name="lat" value={form.lat} onChange={handleChange} placeholder="Latitude" required />
      <input name="lng" value={form.lng} onChange={handleChange} placeholder="Longitude" required />

      <button
        type="submit"
        style={{
          background: "#2c5d77",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "8px",
          cursor: "pointer",
        }}
      >
        Salvar
      </button>
    </form>
  );
}
