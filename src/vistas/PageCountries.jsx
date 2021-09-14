import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Pais from "../componentes/ElementsPageConunties/Pais";
import BuscarPais from "../componentes/ElementsPageConunties/BuscarPais";
// import RenderPais from "../componentes/ElementsPageConunties/RenderPais";

const PageCountries = (props) => {
  const [datoPais, setdatoPais] = useState([]);
  const [namePais, setnamePais] = useState(null);

  const dataApiPais = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${namePais}`);
    const result = await response.json();
    setdatoPais(result);
    console.log(...result);

    let result2 = [];
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name);
      result2.push([i]);
    }
    console.log(result2);
  };

  return (
    <>
      <BuscarPais setnamePais={setnamePais} dataApiPais={dataApiPais} />

      <>
        {datoPais.map((infoCountry) => (
          <Pais
            key={infoCountry.name}
            flag={infoCountry.flag}
            name={infoCountry.name}
            code={infoCountry.alpha2Code}
          />
        ))}
      </>
    </>
  );
};
export default PageCountries;
