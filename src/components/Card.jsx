import DeleteButton from "./ButtonDelete";

const Card = ({ record }) => {
  const sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  const icono =
    "https://res.cloudinary.com/dhzoxdo6q/image/upload/donacion-sangre/" +
    sangre[record.tipo_sangre - 1] +
    ".png";

  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card bg-white rounded-5 mb-3 w-100 border-danger border-3">
        <div className="d-flex justify-content-center align-items-center fs-4">
          <span className="fw-bold">{record.nombre_apellido_donatario}</span>
          <DeleteButton id={ record .id} />
          <span>
            <button className="btn btn-link btn-sm">
              <i className="bi bi-arrow-up-right-circle fs-4"></i>
            </button>
          </span>
        </div>

        <div>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>Teléfono:</span>
            <span className="fw-bold">{record.telefono_contacto}</span>
          </p>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>C.I:</span>
            <span className="fw-bold">{record.cedula_donatario}</span>
          </p>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>Lugar de donación:</span>
            <span className="fw-bold">{record.establecimiento}</span>
          </p>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>RH:</span>
            <span className="text-end">
              <img src={icono} className="icono-sangre"></img>
            </span>
          </p>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>Volúmenes:</span>
            <span className="fw-bold">{record.volumenes_necesarios}</span>
          </p>
          <p className="d-flex justify-content-between border-bottom px-2">
            <span>Fecha límite:</span>
            <span className="fw-bold">{record.fecha_limite}</span>
          </p>
        </div>

        <p className="text-center pb-3 fw-bold">TOKENNNMMNNNNN</p>
      </div>
    </div>
  );
};

export default Card;
