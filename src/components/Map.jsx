import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = () => {
  const [locationData, setLocationData] = useState(null);

  const [defaultPosition, setDefaultPosition] = useState(null); // Posición predeterminada del mapa
  const link = 'https://www.google.com/maps/search/?api=1&query='
  
  useEffect(() => {
    // Get the locations
    axios
      .get("http://192.168.16.90:8000/api/locales")
      .then((response) => {
        let data = response.data.data;
        setLocationData(data);
        setDefaultPosition([data[0].latitud, data[0].longitud]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      {defaultPosition && (
        <MapContainer
          center={defaultPosition}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locationData.map((location) => (
            <Marker
              key={location.id}
              position={[location.latitud, location.longitud]}
            >
              <Popup>
                <strong>{location.local_donacion}</strong>
                <br />
                Dirección: {location.direccion ? location.direccion : '-'}
                <br />
                Hora: {location.hora_apertura ? location.hora_apertura+'hs a ':'-' } {location.hora_cierre? location.hora_cierre+'hs':''}
                <br />
                <a href={link+location.latitud + '%2c'+location.longitud} target="_blank" rel="noreferrer">
                  Ir a google maps
                  </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
