import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate("/lista-solicitudes")
    }
  }, [])
  
  
  return (
    <>
      <NavBar />
      <div className="container mb-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
