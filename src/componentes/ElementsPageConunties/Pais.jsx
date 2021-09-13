import React from "react";
import { Link } from "react-router-dom";
//Styles
// import "../styles/App";

const Pais = ({ flag, name, code }) => {
  return (
    <div className="country-container">
      <h2>{name}</h2>
      <img src={flag} alt={code} />
      {/* <Link to={`/details/${name}`}>Ver más</Link> */}
      {/* to="/details/uruguay" */}
      {/* <a href=""></a> */}
    </div>
  );
};

export default Pais;
