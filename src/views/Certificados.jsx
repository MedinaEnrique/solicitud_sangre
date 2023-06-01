import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Certificados = (href) => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://192.168.16.90:8000/api/certificados?desc=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDatos(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-md-8 mx-auto">
      <div className="d-flex align-items-center justify-content-between px-3 mt-3">
        <h3 className="text-center w-100 m-0">Certificado de Donación</h3>
        {href && (
          <Link to={"/crear-certificado"}>
            <i id="iconplus" className="fs-3 fw-bold">
              +
            </i>
          </Link>
        )}
      </div>

      {datos &&
        datos.map((item, index) => (
          <div
            key={index}
            className="card-body mb-5 border p-3 rounded-4 shadow mt-3 "
          >
            <div>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Establecimiento:</span>
                <span>{item.local_donacion}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Apellido:</span>
                <span>{item.user.surname}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Nombre:</span>
                <span>{item.user.name}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Sexo:</span>
                <span>{item.user.sexo}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Número de Cédula:</span>
                <span>{item.user.nro_cedula}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Certificados;
