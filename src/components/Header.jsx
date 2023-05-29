const Header = ({ title,children, onClick }) => {
  return (
    <>
      <div className="d-flex justify-content-between px-3 mt-3">
        <h1 className="text-center w-100">{title}</h1>
        {onClick && <span id="iconplus" className="fs-1 fw-bold" onClick={onClick}>
          +
        </span>}
      </div>

      {children}
    </>
  );
};

export default Header;
