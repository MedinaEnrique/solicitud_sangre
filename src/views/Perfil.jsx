import axios from "axios";
import { useEffect, useState } from "react";

const Perfil = () => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/user/", {
        headers: {
          Authorization: "Bearer 357|xivkyuADw5AgafhIVuWjVJjt0OQeT4Y4lSOuqbkt",
        },
      })
      .then((response) => setDatos(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-4 px-5 text-center">
      {datos && (
        <div className="card col-md-6 mx-auto">
          <h2>
            <span className="me-1">{datos.name}</span>
            <span>{datos.surname}</span>
          </h2>
          <img
            width={150}
            src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png"
            className="mx-auto"
            alt="perfil"
          />
          <div className="card-body">
            <div>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Fecha de nacimiento:</span>
                <span>{datos.fecha_nacimiento}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Email:</span>
                <span>{datos.email}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Última vez donado:</span>
                <span>{datos.ult_vez_donado}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">Sexo:</span>
                <span>{datos.sexo}</span>
              </p>
              <p className="d-flex justify-content-between border-bottom px-2">
                <span className="fw-bold fs-6">C.I:</span>
                <span>{datos.nro_cedula}</span>
              </p>
            </div>
            <div className="d-grid gap-3">
              <a href="#" className="btn btn-primary btn btn-danger">
                Editar Información
              </a>
              <a href="#" className="btn btn-primary btn btn-danger">
                Cambiar contraseña
              </a>
              <a href="#" className="btn btn-primary btn btn-danger ">
                Cerrar Sesión
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;
