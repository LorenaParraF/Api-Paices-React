import React from "react";

const BuscarPais = ({ setnamePais, dataApiPais }) => {
  return (
    <div>
      <h1>Buscando paises</h1>

      <input
        type="text"
        placeholder="Nombre del pais"
        onChange={(e) => setnamePais(e.target.value)}
      ></input>
      <button onClick={dataApiPais}>Buscar</button>
    </div>
  );
};

export default BuscarPais;
