import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country selected.</p>;
  }

  const { data } = state;

  return (
    <div>
      <h2>{data.name.common}</h2>
      <div></div><p>Region: {data.region}</p>
      <p>Population: {data.population.toLocaleString()}</p>
      <p>Capital: {data.capital ? data.capital.join(", ") : "N/A"}</p>
      <img src={data.flags.png} alt={`${data.name.common} flag`} width="200" />
    </div>
  );
};

export default Details;
