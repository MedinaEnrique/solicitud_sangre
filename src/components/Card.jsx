import React from "react";

const Card = () => {
  let value = {
    id: 81,
    created_at: "2023-04-17T19:59:19.000000Z",
    updated_at: "2023-04-17T19:59:19.000000Z",
    solicitud: "TOKENNNMNNNNNN",
    creado_por: 31,
    fecha_limite: "12/4/2023",
    id_estado: 1,
    volumenes_necesarios: 78,
    nombre_apellido_donatario: "fdagfgfsa",
    cedula_donatario: "4687",
    telefono_contacto: "0991459016",
    tipo_sangre: 3,
    establecimiento: "3",
  };

  return (
    <div className="info-container d-flex flex-column mx-auto">
      <div className="header-info-container d-flex justify-content-center center align-items-center">
        <div className="title-header-info-container">
          ${value.nombre_apellido_donatario}
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
              <td className="text-end fw-bold">{value.telefono_contacto}</td>
            </tr>
            <tr>
              <td>C.I:</td>
              <td className="text-end fw-bold">{value.cedula_donatario}</td>
            </tr>
            <tr>
              <td>Lugar de donación:</td>
              <td className="text-end fw-bold">{value.establecimiento}</td>
            </tr>
            <tr>
              <td>RH:</td>
              <td className="text-end">
                <img src="${source}" className="icono-sangre"></img>
              </td>
            </tr>
            <tr>
              <td>Volúmenes:</td>
              <td className="text-end fw-bold">{value.volumenes_necesarios}</td>
            </tr>
            <tr>
              <td>Fecha límite:</td>
              <td className="text-end fw-bold">{value.fecha_limite}</td>
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
