import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CrearSolicitud = () => {
  const [establecimientos, setEstablecimientos] = useState(null);

  const [nombreApellido, setNombreApellido] = useState("");
  const [cedula, setCedula] = useState("");

  const sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  const onlyNumbers = /^[0-9\b]+$/;
  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/locales")
      .then((response) => setEstablecimientos(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(onlyNumbers.test(cedula));
    if (nombreApellido.trim() == "") {
      Swal.fire({
        icon: "error",
        text: "El nombre esta vacio",
        confirmButtonColor: "red",
      });
    } else if (cedula.trim() == "" || !onlyNumbers.test(cedula)) {
      Swal.fire({
        icon: "error",
        text: "Cedula invalida",
        confirmButtonColor: "red",
      });
    }
  };
  return (
    <div className="col-md-6 mx-auto mt-4">
      <form onSubmit={submitForm}>
        <h2 className="text-center w-100 mb-3">Nueva Solicitud</h2>
        <hr />
        <div className="mb-3">
          <label htmlFor="nombreApellido" className="form-label fw-bold">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreApellido"
            placeholder="Escriba su nombre y apellido aquí"
            onChange={(e) => setNombreApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cedula" className="form-label fw-bold">
            Cédula
          </label>
          <input
            type="text"
            className="form-control"
            id="cedula"
            placeholder="Escriba su cedula aquí"
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoSangre" className="form-label fw-bold">
            Tipo de Sangre
          </label>
          <select
            className="form-select"
            id="establecimiento"
            defaultValue={""}
          >
            <option value={""}></option>
            {sangre &&
              sangre.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="establecimiento" className="form-label fw-bold">
            Establecimiento
          </label>
          <select
            className="form-select"
            id="establecimiento"
            defaultValue={""}
          >
            <option value={""}></option>
            {establecimientos &&
              establecimientos.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.local_donacion}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="volumen" className="form-label fw-bold">
            Volumen
          </label>
          <input
            type="text"
            className="form-control"
            id="volumen"
            placeholder="Escriba el volumen aquí"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaLimite" className="form-label fw-bold">
            Fecha Límite
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaLimite"
            placeholder="Escriba la fecha limite aquí"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label fw-bold">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            placeholder="Escriba el telefono aquí"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label fw-bold">
            Descripción
          </label>
          <textarea
            type="text"
            className="form-control"
            id="descripcion"
            rows="3"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-danger">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearSolicitud;
