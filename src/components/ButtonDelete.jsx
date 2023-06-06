import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DeleteButton = ({ id, listaSolicitud, setListaSolicitud }) => {
    const token = useSelector((state) => state.token);

    const eliminarSolicitud = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary mx-2',
                cancelButton: 'btn btn-danger mx-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Deseas eliminar la solicitud?',
            text: "No podrás deshacer esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFromDB()
            }
        })
    }

    const deleteFromDB = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        axios
            .delete("http://192.168.16.90:8000/api/solicitudes/" + id, config)
            .then((response) => {
                console.log(response)
                Swal.fire({ icon: 'success', text: "Se ha eliminado correctamente" })
                const nuevaLista = listaSolicitud.filter(solicitud => solicitud.id != id)
                setListaSolicitud(nuevaLista)
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({ icon: 'error', text: error?.response?.data })
            });
    }

    return (
        <a href="#" className="link-dark" onClick={eliminarSolicitud}><i className="bi bi-trash fs-5"></i></a>
    )
}

export default DeleteButton