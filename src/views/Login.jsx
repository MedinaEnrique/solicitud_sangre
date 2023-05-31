import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="form py-4 px-5 text-center">
        <h2>DONACIÓN DE SANGRE PARAGUAY</h2>
        <img
          className="imgDonacion"
          src="https://static.vecteezy.com/system/resources/previews/008/615/569/non_2x/a-hand-holding-blood-bag-type-b-donation-free-vector.jpg"
          alt="donacion sangre"
          style={{ width: "200px", height: "auto" }}
        />

        <div className="col-md-6 mx-auto">
          <div className="py-4 px-5">
            <label htmlFor="InputEmail" className="form-label fw-bold fs-5">
              Email
            </label>
            <input
              type="email"
              className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
              id="InputEmail"
            />
          </div>
          <div className="px-5 mb-4">
            <label htmlFor="InputPassword" className="form-label fw-bold fs-5">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
              id="InputPassword"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn btn-danger mb-3"
          style={{ width: "40%", height: "auto" }}
        >
          Iniciar Sesion
        </button>
        <Link to={'/crear-perfil'} className="text-danger d-block mb-2">
          Registrarse
        </Link>
        <Link to={'/olvidaste-contrasenha'} className="text-danger d-block mb-2">
            Olvidaste tu contraseña?
        </Link>
        
      </form>
    </div>
  );
};

export default Login;
