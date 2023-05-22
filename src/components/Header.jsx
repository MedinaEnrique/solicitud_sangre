import React from "react";
import Filter from "./Filter";

const Header = () => {
  return (
    <>
      <div id="header-container" class="d-flex container-fluid text-center">
        <div id="solicitudes-header">Solicitudes</div>
        <div id="mas-button-container">+</div>
      </div>

      <div
        id="main-container"
        class="d-flex flex-column container-fluid align-items-center"
      >
        <Filter/>
      </div>
    </>
  );
};

export default Header;
