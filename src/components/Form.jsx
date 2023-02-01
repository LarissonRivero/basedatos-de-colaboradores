import React, { useState } from "react";
import List from "./List";
import BaseColaboradores from "./Colaboradores";
import Button from "react-bootstrap/Button";

function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const addColaborador = (e) => {
    e.preventDefault();
    if (nombre === "" || correo === "") { 
      alert("No puede dejar campos vacios");
    } else {
      const newId = BaseColaboradores.length + 1;
      BaseColaboradores.push({
        id: String(newId),
        nombre: nombre,
        correo: correo,
      });
    }
    setNombre("");
    setCorreo("");
  };

  return (
    <div>
      <form onSubmit={addColaborador}>
        <div className="formControl">
          <label>Nombre del Colaborador</label>
          <input
            type="text"
            
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            placeholder="Ingresa el Nombre del Colaborador"
            value={nombre}
          />
        </div>
        <div className="formControl">
          <label>Correo del Colaborador</label>
          <input
            type="text"
            
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
            placeholder="Ingresa el Correo del Colaborador"
            value={correo}
          />
          <div class="d-grid gap-2 col-6 mx-auto mt-3" >
          <Button variant="secondary" type="submit">Agregar Colaborador</Button>
          </div>
        </div>
       
      </form>
      <List />
    </div>
  );
}

export default Form;
