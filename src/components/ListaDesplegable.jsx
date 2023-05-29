const ListaDesplegable = ({ locationData, link, setCoordenadas }) => {
  const handleClick = (latitud, longitud) => {
    setCoordenadas({ lat: latitud, lng: longitud });
  };

  return (
    <div className="accordion p-2">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed bg-danger-subtle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-controls="collapseOne"
          >
            Puntos de Donación
          </button>
        </h2>

        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {/* Mapeo */}
            {locationData &&
              locationData.map((location, index) => (
                <div key={index}>
                  <strong>{location.local_donacion}</strong>
                  <br />
                  Dirección: {location.direccion ? location.direccion : "-"}
                  <br />
                  Hora:{" "}
                  {location.hora_apertura
                    ? location.hora_apertura + "hs a "
                    : "-"}{" "}
                  {location.hora_cierre ? location.hora_cierre + "hs" : ""}
                  <br />
                  <p className="d-flex align-items-center">
                    <a
                      href={link + location.latitud + "%2c" + location.longitud}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ir a google maps
                    </a>
                    <button
                      className="btn btn-link p-0 ms-4"
                      href="#"
                      onClick={() =>
                        handleClick(location.latitud, location.longitud)
                      }
                    >
                      Ver ubicación
                    </button>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaDesplegable;
