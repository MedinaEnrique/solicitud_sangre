import { NavLink } from "react-router-dom";

function NavBar() {
  const links = [
    { title: "Mapa", href: "/mapa" },
    { title: "Solicitudes", href: "/lista-solicitudes" },
    { title: "Certificados", href: "/certificados" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Donacion de Sangre ♥
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
                <NavLink className='nav-link' key={index} to={link.href}>
                    {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
