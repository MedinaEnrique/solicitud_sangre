import React from "react";

const Filter = ({listaSolicitud}) => {
  return (
    <div
      id="misSolicitudes-container"
      className="d-flex justify-content-center align-items-center"
    >
      Mis solicitudes <input id="check-misSolicitudes" type="checkbox" />
    </div>
  );
};

export default Filter;
