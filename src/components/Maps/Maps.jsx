import React, { useEffect, useState } from "react";

const Maps_URL = "https://valorant-api.com/v1/maps";

export function Maps() {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMaps();
  }, []);

  async function fetchMaps() {
    try {
      setLoading(true);
      const response = await fetch(Maps_URL);
      const data = await response.json();
      setMaps(data.data); // La API devuelve { data: [...] }
    } catch (error) {
      console.error("Error fetching maps:", error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <div className="loading">Cargando mapas...</div>;
  }

  const uniqueMaps = maps.filter(
    (map, index, self) =>
      self.findIndex((m) => m.displayName === map.displayName) === index
  );

  return (
    <main className="maps-container">
      <h1 className="title-maps">Mapas de Valorant</h1>
      <section className="maps-grid">
        {uniqueMaps.map((map) => (
          <article key={map.uuid} className="map-card">
            {map.displayIcon ? (
              <img
                className="img-map"
                src={map.displayIcon}
                alt={map.displayName}
              />
            ) : (
              <div className="img-map img-map--empty">Sin imagen</div>
            )}
            <h3 className="name-map">{map.displayName}</h3>
            <button>Ver detalles</button>
          </article>
        ))}
      </section>
    </main>
  );
}
