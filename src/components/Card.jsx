import React from "react";

export const Card = ({ elem }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={elem.flags.svg}
          className="card-img-top"
          alt={elem.name.common}
        />
        <div className="card-body">
          <h5 className="card-title">{elem.name.common}</h5>
          <div>
            <a
              href={elem.maps.googleMaps}
              target="_blank"
              className="btn btn-primary m-2"
              rel="noreferrer"
            >
              Ver mapa
            </a>
            <button className="btn btn-warning m-2">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};
