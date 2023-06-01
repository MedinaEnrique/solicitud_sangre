import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearCertificado = () => {
  const navigate = useNavigate();
  const [establecimientos, setEstablecimientos] = useState(null);
  const [fechaDonacion, setFechaDonacion] = useState('');
  const [localDonacionId, setLocalDonacionId] = useState('');

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/locales")
      .then((response) => setEstablecimientos(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear el objeto con los datos a enviar
    const data = {
      fecha_donacion: fechaDonacion,
      local_donacion_id: localDonacionId
    };

    const token = localStorage.getItem("token")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    // Hacer la solicitud POST a la API
    axios
      .post("http://192.168.16.90:8000/api/certificados", data, config)
      .then((response) => {
        console.log(response);
        navigate("/certificados")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateForm = () => {
    if (fechaDonacion.trim() === "" || localDonacionId.trim() === "") {
      return false;
    }
    return true;
  };

  return (
    <div className="col-md-6 mx-auto mt-5 pt-3">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center w-100 mb-3">Nuevo Certificado</h2>
        <hr />
        <div className="mb-3">
          <label htmlFor="fechaDonacion" className="form-label fw-bold">
            Fecha de Donación
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaDonacion"
            value={fechaDonacion}
            onChange={(e) => setFechaDonacion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="establecimiento" className="form-label fw-bold">
            Centro
          </label>
          <select
            className="form-select"
            id="establecimiento"
            value={localDonacionId}
            onChange={(e) => setLocalDonacionId(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            {establecimientos &&
              establecimientos.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.local_donacion}
                </option>
              ))}
          </select>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-danger"
            disabled={!validateForm()}
          >
            Generar Certificado
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearCertificado;
