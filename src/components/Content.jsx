import { useState } from "react";
import Header from "./Header";
import ListCard from "./ListCard";
import axios from "axios";

const Content = () => {
  const [listaSolicitud, setListaSolicitud] = useState(null);

  const obtenerSolicitudes = () => {
    axios
      .get("http://192.168.16.90:8000/api/solicitudes")
      .then((response) => setListaSolicitud(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-danger">
      <Header onClick={() => obtenerSolicitudes()} />
      <ListCard lista={listaSolicitud} />
    </div>
  );
};

export default Content;
