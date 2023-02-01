import React, { useState } from "react";
import BaseColaboradores from "./Colaboradores";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SearchBox = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (e) => {
    e.preventDefault();
    handleShow();

    const result = BaseColaboradores.filter((element) =>
      element.nombre.toLowerCase().includes(search.toLowerCase())
    );

    if (search === "") {
      alert("Por favor ingrese un nombre");
      handleClose();
      return;
    } else if (result.length === 0) {
      alert("No se encontro ningun colaborador con ese nombre");
      handleClose();
      return;
    } else {
      setSearchResult(result);
      console.log(searchResult)
    }

    setSearch("");
  };

  return (
    <div>
      <div className="searchContainer">
        <input className="searchInput"
          type="text"
          placeholder="Buscar Colaborador"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <Button variant="secondary ms-1 btn-sm" onClick={handleSearch}>
          Buscar
        </Button>
        {searchResult.map((colaborador) => (
          <Modal show={show} key={colaborador.id} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{colaborador.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{colaborador.correo}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </div>
  );
};
export default SearchBox;
