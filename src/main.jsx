import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ListaSolicitud from "./views/ListaSolicitud.jsx";
import Mapa from "./views/Mapa.jsx";
import Login from "./views/Login.jsx";
import Perfil from "./views/Perfil.jsx";
import CrearSolicitud from "./views/CrearSolicitud.jsx";
import CrearPerfil from "./views/CrearPerfil.jsx";
import Certificados from "./views/Certificados.jsx";
import CrearCertificado from "./views/CrearCertificado.jsx"
import ResetPassword from "./views/ResetPassword.jsx";
import EditProfile from "./views/EditProfile.jsx";
import ChangePassword from "./views/ChangePassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="lista-solicitudes" element={<ListaSolicitud />} />
      <Route path="mapa" element={<Mapa />} />
      <Route path="login" element={<Login/>} />
      <Route path="perfil" element={<Perfil/>} />
      <Route path="certificados" element={<Certificados/>} />
      <Route path="crear-solicitud" element={<CrearSolicitud/>} />
      <Route path="crear-perfil" element={<CrearPerfil/>} />
      <Route path="crear-certificado" element={<CrearCertificado/>} />
      <Route path="/olvidaste-contrasenha" element={<ResetPassword/>} />
      <Route path="/editar-perfil" element={<EditProfile/>} />
      <Route path="/change-password"element={<ChangePassword/>} />
      
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

