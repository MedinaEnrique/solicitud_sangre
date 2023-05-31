import { Link } from "react-router-dom";

const Header = ({ title, children, href }) => {
  return (
    <>
      <div className="d-flex justify-content-between px-3 mt-3">
        <h1 className="text-center w-100">{title}</h1>
        {href && (
          <Link to={href}>
            <span id="iconplus" className="fs-1 fw-bold" >
              +
            </span>
          </Link>
        )}
      </div>

      {children}
    </>
  );
};

export default Header;
