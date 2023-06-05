import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    

    const handleResetPassword = () => {
        // Realizar la solicitud HTTP a la API para restablecer la contraseña
        axios
        .post('http://192.168.16.90:8000/api/reset-password/')
        .then((response) => {
            console.log(response.token);
            localStorage.setItem("token", response.token);
        })
        .catch((error) => {
            console.error(error);
        });
};
    
    return (
        <div className="text-center card-body mb-5 border p-3 rounded-4 shadow mt-5">
            <h3 className="text-center w-100 m-0">He olvidado mi contraseña</h3>
            <br />
            <br />
            <div>
                <div className="px-5 mb-4">
                    <label htmlFor="InputEmail" className="form-label fw-bold fs-5">
                        Ingrese E-mail
                    </label>
                    <input
                        type="text"
                        className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
                        id="InputEmail"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <p className='small'>Se enviara un link al correo ingresado para restablecer su contraseña</p>
           <br />
           <br />
           <div className='d-grid gap-2 col-6 mx-auto'>
             <button className="btn btn-primary btn-danger mb-3" onClick={handleResetPassword}>
                Enviar
             </button>
           </div>
        </div>
    );
};

export default ResetPassword;
