import { useState } from "react";
import "./Objetivos.css";

export default function Objetivos({ objetivos, setObjetivos }) {
  const [nombreObjetivo, setNombreObjetivo] = useState("");

  const agregarObjetivo = () => {
    if (nombreObjetivo.trim()) {
      setObjetivos([
        ...objetivos,
        { id: objetivos.length + 1, lugar: nombreObjetivo },
      ]);
      setNombreObjetivo("");
    }
  };

  const manejarTeclaPresionada = (e) => {
    if (e.key === "Enter") {
      agregarObjetivo();
    }
  };

  return (
    <div className="Objetivos-container">
      <div className="Objetivos-form">
        <h1>Gestionar Objetivos</h1>
        <input
          type="text"
          value={nombreObjetivo}
          onChange={(e) => setNombreObjetivo(e.target.value)}
          placeholder="Nombre del objetivo"
          onKeyDown={manejarTeclaPresionada}
        />
        <button onClick={agregarObjetivo}>Agregar Objetivo</button>
      </div>
      <div className="lista">
        <ul>
          {objetivos.map((objetivo) => (
            <li key={objetivo.id}>📍 {objetivo.lugar}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
