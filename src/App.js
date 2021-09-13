import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// vistas
import PageCountries from "./vistas/PageCountries.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PageCountries />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// import React, { useState, useEffect } from "react";

// import Header from "./componentes/Home";

// const App = () => {
//   const [pais, setPais] = useState(true);
//   const url = `https://restcountries.eu/rest/v2/all#20210908205336`;
//   const fetchApi = async () => {
//     const response = await fetch(url);
//     const result = await response.json();
//     setPais(...result, pais);
//     console.log(result);
//   };
//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return (
//     <div className="App">
//       <Header setPais={setPais} fetchApi={fetchApi} />
//     </div>
//   );
// };

// export default App;
