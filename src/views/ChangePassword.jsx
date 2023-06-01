
import axios from 'axios';

const ChangePassword = () => {
    const handleChangePassword = () => {
        // Realizar la solicitud HTTP a la API para restablecer la contraseña
        axios
            .post('http://192.168.16.90:8000/api/cambiar-password/')
            .then((response) => {
                console.log(response.token);
                localStorage.setItem("token", response.token);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="text-center card-body mb-5 border p-3 rounded-4 shadow mt-5">
            <h3 className="text-center w-100 m-0">Cambiar mi contraseña</h3>
            <br />
            <br />
            <div className='col-md-8 mx-auto'>
                <div className="px-5 mb-4">
                    <label htmlFor="CurrentPassword" className="form-label fw-bold fs-5">
                        Ingrese contraseña actual
                    </label>
                    <input
                        type="text"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
                        id="InputCurrentPassword"
                        name="currentPassword"
                    />
                </div>
                <div className="px-5 mb-4">
                    <label htmlFor="CurrentPassword" className="form-label fw-bold fs-5">
                        Ingrese contraseña nueva
                    </label>
                    <input
                        type="text"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
                        id="InputNewPassword"
                        name="newPassword"
                    />
                </div>
                <div className="px-5 mb-4">
                    <label htmlFor="ConfirmNewPassword" className="form-label fw-bold fs-5">
                        Ingrese contraseña nueva
                    </label>
                    <input
                        type="text"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
                        id="InputConfirmNewPassword"
                        name="confirmcNewPassword"
                    />
                </div>
            </div>
            <div className='d-grid gap-2 col-md-6 mx-auto'>
                <button className="btn btn-primary btn-danger mb-3" onClick={handleChangePassword}>
                    Confirmar Cambio
                </button>
            </div>
        </div>
    )
}

export default ChangePassword