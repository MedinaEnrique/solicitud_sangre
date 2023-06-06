import { useState } from "react";
import Header from "../components/Header";
import ListCard from "../components/ListCard";
import Filter from "../components/Filter";

const ListaSolicitud = () => {
  const [listaSolicitud, setListaSolicitud] = useState(null);

  return (
    <div className="border border-danger-subtle">
      <Header title={"Solicitudes"} href={'/crear-solicitud'}>
        <hr className="text-danger" />
        <Filter setListaSolicitud={setListaSolicitud}/>
      </Header>
      <ListCard lista={listaSolicitud} setListaSolicitud={setListaSolicitud}/>
    </div>
  );
};

export default ListaSolicitud;
