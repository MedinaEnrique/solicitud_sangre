import React from "react";
import Header from "./Header";
import ListCard from "./ListCard";

const Content = () => {
  const [listaSolicitud, setListaSolicitud] = useState([]);
  return (
    <div id="container" className="container-lg p-0 m-0 d-flex flex-column">
      <Header setListaSolicitud={setListaSolicitud}/>
      <ListCard listaSolicitud={listaSolicitud}/>
    </div>
  );
};

export default Content;
