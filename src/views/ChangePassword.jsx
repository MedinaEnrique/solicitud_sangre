
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("null");
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        //validar campos
        if (newPassword.trim() != "" && confirmNewPassword.trim() != "" && oldPassword.trim() != "") {
            if (newPassword === confirmNewPassword) {

                const data = {
                    old_password: oldPassword,
                    password: newPassword,
                    confirm_new_password: confirmNewPassword
                }
                changePassword(data)
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Las contraseñas nuevas no coinciden '
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Completar todos los campos'
            })
        }
    }

    const changePassword = (data) => {
        // Realizar la solicitud HTTP a la API para restablecer la contraseña
        const token = localStorage.getItem("token");


        axios
            .post('http://192.168.16.90:8000/api/cambiar-password/', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response);
                const message = response?.data?.message
                Swal.fire({
                    icon: 'success',
                    text: message,
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/perfil')
                    }
                })
            })
            .catch((error) => {
                //Obtener mensaje de error de contraseña actual
                let message = null
                message = error.response?.data?.message
                console.log(message)
                if (message) {
                    Swal.fire({
                        icon: 'error',
                        text: 'Contraseña actual invalida'
                    })
                }
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="text-center card-body mb-5 border p-3 rounded-4 shadow mt-5">
            <h3 className="text-center w-100 m-0">Cambiar mi contraseña</h3>
            <br />
            <br />
            <div className='col-md-8 mx-auto'>
                <div className="px-5 mb-4">
                    <label htmlFor="CurrentPassword" className="form-label fw-bold fs-5">
                        Ingrese contraseña actual
                    </label>
                    <input
                        type="password"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0 text-center"
                        id="InputOldPassword"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="px-5 mb-4">
                    <label htmlFor="CurrentPassword" className="form-label fw-bold fs-5">
                        Ingrese contraseña nueva
                    </label>
                    <input
                        type="password"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0 text-center"
                        id="InputNewPassword"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="px-5 mb-4">
                    <label htmlFor="ConfirmNewPassword" className="form-label fw-bold fs-5">
                        Confirmar contraseña nueva
                    </label>
                    <input
                        type="password"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0 text-center"
                        id="InputConfirmNewPassword"
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='d-grid gap-2 col-md-6 mx-auto'>
                <button className="btn btn-primary btn-danger mb-3" type='submit'>
                    Confirmar Cambio
                </button>
            </div>
        </form>
    );
};

export default ChangePassword;