import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {

  const token = useSelector((state) => state.token);

  const links = [
    { title: "Mapa", href: "/mapa", active: (token ? true : false) },
    { title: "Solicitudes", href: "/lista-solicitudes", active: (token ? true : false) },
    { title: "Certificados", href: "/certificados", active: (token ? true : false) },
    { title: "Perfil", href: "/perfil", active: (token ? true : false) },
    { title: "Login", href: "/login", active: (token ? false : true) },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Donación de Sangre
            <i className="bi bi-heart-pulse ms-2"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div></div>
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((link, index) => (
                <span key={index}>
                  {link.active == true &&
                    <NavLink className='nav-link' to={link.href}>
                      {link.title}
                    </NavLink>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
