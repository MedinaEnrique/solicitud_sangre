import { useEffect, useState } from "react";
import Header from "../components/Header";
import ListCard from "../components/ListCard";
import axios from "axios";
import Filter from "../components/Filter";

const ListaSolicitud = () => {
  const [listaSolicitud, setListaSolicitud] = useState(null);
  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/solicitudes")
      .then((response) => setListaSolicitud(response.data.data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="border border-danger-subtle">
      <Header title={"Solicitudes"} href={'/crear-solicitud'}>
        <hr className="text-danger" />
        <Filter />
      </Header>
      <ListCard lista={listaSolicitud} />
    </div>
  );
};

export default ListaSolicitud;
