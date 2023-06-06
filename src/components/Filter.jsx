import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Filter = ({ setListaSolicitud }) => {
  const [filter, setFilter] = useState(false);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (filter) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      axios
        .get("http://192.168.16.90:8000/api/solicitudes-protegido", config)
        .then((response) => setListaSolicitud(response.data.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get("http://192.168.16.90:8000/api/solicitudes")
        .then((response) => setListaSolicitud(response.data.data))
        .catch((error) => console.log(error));
    }
  }, [filter])

  
  return (
    <div>
      <p className="d-flex align-items-center justify-content-center mb-3 fs-4">
        Mis solicitudes
        <input className="form-check-input ms-2" type="checkbox" value={filter}
          onChange={() => setFilter(!filter)} />
      </p>
    </div>
  );
};

export default Filter;
