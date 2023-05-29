import Filter from "./Filter";

const Header = ({ onClick }) => {
  return (
    <>
      <div className="d-flex justify-content-between px-3">
        <h1 className="text-white text-center w-100">Solicitudes</h1>
        <span id="iconplus" className="fs-1 text-white" onClick={onClick}>
          +
        </span>
      </div>

      <hr className="text-white" />
      <Filter />
    </>
  );
};

export default Header;
