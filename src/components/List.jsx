import React from "react";
import BaseColaboradores from './Colaboradores';

function List() {
  return (
    <div className="listContainer">
        <h2>Listado de colaboradores</h2>
            {
                BaseColaboradores.map((colaborador, index) => {
                    return (
                        <div key={index} className="colaboratorContainer">
                            <p>{colaborador.nombre}</p>
                            <p>{colaborador.correo}</p>
                        </div>
                    )
                })
            }
    </div>
  );
}

export default List;
