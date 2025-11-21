export function Inicio() {
  return (
    <main className="inicio-container">
      <section className="hero-section">
        <h1 className="title-inicio">Bienvenido a Valorant Hub</h1>
        <p className="subtitle-inicio">
          Tu portal completo para explorar el universo de Valorant
        </p>
      </section>

      <section className="description-section">
        <div className="description-card">
          <h2>¿Qué es esta aplicación?</h2>
          <p className="description-inicio">
            Valorant Hub es una aplicación web que te permite explorar toda la
            información oficial sobre <strong>Valorant</strong>, el shooter
            táctico de Riot Games. Utilizando la API oficial de Valorant, te
            ofrecemos datos actualizados sobre agentes, mapas, armas y más.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Agentes</h3>
            <p>
              Descubre todos los agentes disponibles, sus habilidades únicas,
              roles y estrategias de juego.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Mapas</h3>
            <p>
              Explora los mapas oficiales con información detallada sobre cada
              ubicación y sus características.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚔️</div>
            <h3>Armas</h3>
            <p>
              Consulta el arsenal completo con estadísticas, daño, precisión y
              recomendaciones de uso.
            </p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>Sobre Valorant</h2>
          <p>
            Valorant es un shooter táctico competitivo desarrollado por Riot
            Games. Combina elementos de estrategia y habilidad, donde equipos de
            cinco jugadores compiten en rondas utilizando una variedad de
            agentes con habilidades únicas.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5v5</span>
              <span className="stat-label">Jugadores por equipo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Agentes únicos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Mapas competitivos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>¡Comienza a explorar!</h2>
        <p>
          Navega por las diferentes secciones y descubre todo lo que necesitas
          saber sobre Valorant.
        </p>
        <div className="cta-buttons">
          <button className="card-button secondary">Ver Agentes</button>
          <button className="card-button secondary">Explorar Mapas</button>
          <button className="card-button secondary">Ver Armas</button>
        </div>
      </section>
    </main>
  );
}
