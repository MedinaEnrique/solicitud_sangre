import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	// const token = useSelector(state => state.token)
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			email,
			password
		}

		axios.post("http://192.168.16.90:8000/api/login", data)
			.then(response => { // El perfil existe, redirigir a la vista de perfil
				console.log(response.data)
				dispatch ({type :'setToken', payload : response.data.token})
				dispatch ({type :'setUser', payload : response.data.user})
				navigate('/perfil')
			})
			.catch(error => {
				// El perfil no existe o hay un error en la solicitud
				if (error.response && error.response.status === 401) {
					setError(
						"Credenciales inválidas. Verifica tu correo electrónico y contraseña."
					);
				} else {
					setError("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
				}
			})

	}

	return (
		<div>
			<form className="form py-4 px-5 text-center" onSubmit={handleSubmit}>
				<h2>DONACIÓN DE SANGRE PARAGUAY</h2>
				<img
					className="imgDonacion"
					src="https://static.vecteezy.com/system/resources/previews/008/615/569/non_2x/a-hand-holding-blood-bag-type-b-donation-free-vector.jpg"
					alt="donacion sangre"
					style={{ width: "200px", height: "auto" }}
				/>

				<div className="col-md-6 mx-auto">
					<div className="py-4 px-5">
						<label htmlFor="InputEmail" className="form-label fw-bold fs-5">
							Email
						</label>
						<input
							type="email"
							className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
							id="InputEmail"
							value={email}
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="px-5 mb-4">
						<label htmlFor="InputPassword" className="form-label fw-bold fs-5">
							Contraseña
						</label>
						<input
							type="password"
							className="form-control mx-auto border-0 border-bottom border-dark rounded-0"
							id="InputPassword"
							value={password}
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
				</div>
				{error && <p className="text-danger text-center">{error}</p>}
				<button
					type="submit"
					className="btn btn-primary btn btn-danger mb-3"
					style={{ width: "40%", height: "auto" }}
				>
					Iniciar Sesión
				</button>
				<Link to="/crear-perfil" className="text-danger d-block mb-2">
					Registrarse
				</Link>
				<Link to="/olvidaste-contrasenha" className="text-danger d-block mb-2">
					¿Olvidaste tu contraseña?
				</Link>
			</form>
		</div>
	);
};

export default Login;
