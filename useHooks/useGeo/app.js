import React from "react";
import useGeo from "./useGeo";

const App = () => {
  const { isLoading, geo, error } = useGeo();
  return !isLoading && !error &&
    <div>
      <p>lat : {geo.latitude}</p>
      <p>lon : {geo.longitude}</p>
    </div>


);
};

export default App;