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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="lista-solicitudes" element={<ListaSolicitud />} />
      <Route path="mapa" element={<Mapa />} />
      <Route path="login" element={<Login/>} />
      <Route path="perfil" element={<Perfil/>} />
      <Route path="crear-solicitud" element={<CrearSolicitud/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
