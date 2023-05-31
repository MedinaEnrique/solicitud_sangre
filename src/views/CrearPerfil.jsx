import { useState } from 'react';

const CrearPerfil = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [cedulaIdentidad, setCedulaIdentidad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [contrasenha, setContrasenha] = useState('');
  const [confirmarContrasenha, setConfirmarContrasenha] = useState('');
  const [errorContrasenha, setErrorContrasenha] = useState('');

  const handleNombresChange = (event) => {
    setNombres(event.target.value);
  };

  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContrasenhaChange = (event) => {
    setContrasenha(event.target.value);
  };

  const handleConfirmarContrasenhaChange = (event) => {
    setConfirmarContrasenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contrasenha !== confirmarContrasenha) {
      setErrorContrasenha('Las contraseñas no coinciden');
      return;
    }
 
  };

  const validateForm = () => {
    if (
      nombres.trim() === '' ||
      apellidos.trim() === '' ||
      sexo.trim() === '' ||
      fechaNacimiento.trim() === '' ||
      email.trim() === '' ||
      contrasenha.trim() === '' ||
      confirmarContrasenha.trim() === ''
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className='col-md-6 mx-auto mt-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombres" className="form-label fw-bold">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            id="nombres"
            value={nombres}
            onChange={handleNombresChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label fw-bold">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={apellidos}
            onChange={handleApellidosChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cedulaIdentidad" className="form-label fw-bold">
            Cédula de Identidad
          </label>
          <input
            type="text"
            className="form-control"
            id="cedulaIdentidad"
            value={cedulaIdentidad}
            onChange={(e) => setCedulaIdentidad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sexo" className="form-label fw-bold">
            Sexo
          </label>
          <input
            type="text"
            className="form-control"
            id="sexo"
            value={sexo}
            onChange={handleSexoChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label fw-bold">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={handleFechaNacimientoChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasenha" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasenha"
            value={contrasenha}
            onChange={handleContrasenhaChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmarContrasenha" className="form-label fw-bold">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmarContrasenha"
            value={confirmarContrasenha}
            onChange={handleConfirmarContrasenhaChange}
          />
          {errorContrasenha && (
            <div className="text-danger">{errorContrasenha}</div>
          )}
        </div>
       <div className='d-grid'>
         <button
           type="submit"
           className="btn btn-primary btn-danger"
           disabled={!validateForm()}
         >
           Guardar
         </button>
       </div>
      </form>
    </div>
  );
};

export default CrearPerfil;
