import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function App() {

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (token) {
      if (location == '/login' || location == '/crear-perfil') {
        navigate("/lista-solicitudes")
      }
    }else{
      if (location != '/login' && location != '/crear-perfil') {
        Swal.fire({icon:'error', title:'Debe iniciar sesión'})
      } 
      navigate("/login");
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
