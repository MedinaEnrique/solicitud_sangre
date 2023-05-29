import { useState } from "react";
import Header from "../components/Header"
import Map from "../components/Map"
import ListaDesplegable from "../components/ListaDesplegable";

const Mapa = () => {
    const [locationData, setLocationData] = useState(null);
    const [coordenadas, setCoordenadas] = useState(null);

    const link = 'https://www.google.com/maps/search/?api=1&query='
  return (
    <div className="border border-danger-subtle">
        <Header title={"Mapa"}/>
        <ListaDesplegable locationData={locationData} link={link} setCoordenadas = {setCoordenadas}/>
        <Map locationData ={locationData} setLocationData= {setLocationData} link={link} coordenadas= {coordenadas}/>
    </div>
  )
}

export default Mapa