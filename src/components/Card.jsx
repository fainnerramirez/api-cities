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
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};
