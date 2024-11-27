import React from "react";
import { useLocation } from "react-router-dom";
import styles from './/Details.module.css';

const Details = () => {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country selected.</p>;
  }

  const { data } = state;

  return (
    <div>
      <h2 className={styles.countryName}>{data.name.common}</h2>
      <img src={data.flags.png} alt={`${data.name.common} flag`} width="350" />
      <p className={styles.displayContentText}>
        <strong>Located in:</strong> {data.subregion || data.region || "Unknown region"}
      </p>
      <p className={styles.displayContentText}>
        <strong>Capital:</strong> {data.capital ? data.capital.join(", ") : "N/A"}
      </p>
    </div>
  );
};

export default Details;
