import React from "react";
import Filter from "./Filter";

const Header = ({setListaSolicitud}) => {
  const obtenerSolicitud = () =>{
    
  }
  return (
    <>
      <div id="header-container" className="d-flex container-fluid text-center">
        <div id="solicitudes-header">Solicitudes</div>
        <div id="mas-button-container">+</div>
      </div>

      <div
        id="main-container"
        className="d-flex flex-column container-fluid align-items-center"
      >
        <Filter/>
      </div>
    </>
  );
};

export default Header;
