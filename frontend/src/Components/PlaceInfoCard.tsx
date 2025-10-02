interface PlaceInfoCardProps {
  place: any;
}

export default function PlaceInfoCard({ place }: PlaceInfoCardProps) {
  // 🔹 Detecta se o item vem do backend (Mongo) ou do Google
  const isBackend = !!place._id;

  // Foto do Google
  const photoUrl =
    place.photos && place.photos.length > 0
      ? place.photos[0].getUrl({ maxWidth: 300, maxHeight: 200 })
      : null;

  return (
    <div style={{ maxWidth: "250px", textAlign: "left" }}>
      {/* Foto (apenas se for do Google e tiver) */}
      {!isBackend && photoUrl && (
        <img
          src={photoUrl}
          alt={place.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
      )}

      {/* Nome */}
      <h3 style={{ margin: "5px 0" }}>{place.name}</h3>

      {/* Endereço */}
      <p style={{ margin: "3px 0" }}>
        {isBackend ? place.address : place.vicinity}
      </p>

      {/* Avaliação */}
      {place.rating && <p style={{ margin: "3px 0" }}>⭐ {place.rating}</p>}

      {/* Telefone (apenas se vier do backend) */}
      {isBackend && place.phone && (
        <p style={{ margin: "3px 0" }}>📞 {place.phone}</p>
      )}

      {/* Categoria (backend) */}
      {isBackend && place.category && (
        <p style={{ margin: "3px 0", fontStyle: "italic" }}>
          Categoria: {place.category}
        </p>
      )}

      {/* Link Google Maps (somente se for do Google) */}
      {!isBackend && place.place_id && (
        <a
          href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "8px",
            padding: "6px 10px",
            backgroundColor: "#2c5d77",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Ver no Google Maps
        </a>
      )}
    </div>
  );
}
