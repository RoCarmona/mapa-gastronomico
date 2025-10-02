interface SidebarProps {
  places: any[];
}

export default function Sidebar({ places }: SidebarProps) {
  return (
    <aside
      style={{
        width: "100%",
        padding: "10px",
        background: "#f9f9f9",
        overflowY: "auto",
        height: "100%",
      }}
    >
      <h3>Estabelecimentos encontrados</h3>
      {places.length === 0 && <p>Nenhum local encontrado.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {places.map((place) => (
          <li key={place.id || place.place_id} style={{ marginBottom: "10px" }}>
            <strong>{place.name}</strong>
            <br />
            {place.vicinity || place.formatted_address}
            {place.rating && <p>⭐ {place.rating}</p>}
          </li>
        ))}
      </ul>
    </aside>
  );
}
