import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DeleteButton = ({ id, listaSolicitud, setListaSolicitud }) => {
    const token = useSelector((state) => state.token);

    const eliminarSolicitud = () => {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        axios
            .delete("http://192.168.16.90:8000/api/solicitudes/" + id,config)
            .then((response) => {
                console.log(response)
                Swal.fire({icon:'success', text:"Se ha eliminado correctamente"})
                const nuevaLista = listaSolicitud.filter(solicitud => solicitud.id != id)
                setListaSolicitud(nuevaLista)
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({icon:'error', text:error?.response?.data})
            });
    }

    return (
        <a href="#" className="link-dark" onClick={eliminarSolicitud}><i className="bi bi-trash"></i></a>
    )
}

export default DeleteButton