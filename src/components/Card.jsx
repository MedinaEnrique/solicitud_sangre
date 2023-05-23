import React from "react";

const Card = ({record}) => {
 
return (
    <div className="info-container d-flex flex-column mx-auto">
      <div className="header-info-container d-flex justify-content-center center align-items-center">
        <div className="title-header-info-container">
          {record.nombre_apellido_donatario}
        </div>
        <div className="delete-header-info-container text-center">
          <button className="btn btn-link btn-sm" disabled>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
        <div className="share-header-info-container text-center">
          <button className="btn btn-link btn-sm">
            <i className="bi bi-arrow-up-right-circle"></i>
          </button>
        </div>
      </div>
      <div className="main-info-container">
        <table className="table">
          <thead className="d-none">
          </thead>
          <tbody>
            <tr>
              <td>Teléfono:</td>
              <td className="text-end fw-bold">{record.telefono_contacto}</td>
            </tr>
            <tr>
              <td>C.I:</td>
              <td className="text-end fw-bold">{record.cedula_donatario}</td>
            </tr>
            <tr>
              <td>Lugar de donación:</td>
              <td className="text-end fw-bold">{record.establecimiento}</td>
            </tr>
            <tr>
              <td>RH:</td>
              <td className="text-end">
                <img src="${source}" className="icono-sangre"></img>
              </td>
            </tr>
            <tr>
              <td>Volúmenes:</td>
              <td className="text-end fw-bold">{record.volumenes_necesarios}</td>
            </tr>
            <tr>
              <td>Fecha límite:</td>
              <td className="text-end fw-bold">{record.fecha_limite}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-info-container text-center text-uppercase fw-bold">
        TOKENNNMMNNNNN
      </div>
    </div>
  );
};

export default Card;
