import { useState, useEffect } from "react";

const AGENTS_URL = "https://valorant-api.com/v1/agents";

export function Agents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  async function fetchAgents() {
    try {
      setLoading(true);
      const response = await fetch(AGENTS_URL);
      const data = await response.json();
      setAgents(data.data); // La API devuelve { data: [...] }
    } catch (error) {
      console.error("Error fetching agents:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="loading">Cargando agentes...</div>;
  }

  return (
    <main className="agents-container">
      <h1 className="title-agentes">Agentes de Valorant</h1>
      <section className="agents-grid">
        {agents.map((agent) => (
          <article key={agent.uuid} className="agent-card">
            <img
              className="img-agent"
              src={agent.displayIcon}
              alt={agent.displayName}
            />
            <h3 className="name-agent">{agent.displayName}</h3>
            <button className="card-button">Ver detalles</button>
          </article>
        ))}
      </section>
    </main>
  );
}
