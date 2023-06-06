import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const EditProfile = () => {
	const [nombres, setNombres] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [sexo, setSexo] = useState("");
	const [fechaNacimiento, setFechaNacimiento] = useState("");
	const [email, setEmail] = useState("");
	const token = useSelector((state) => state.token);
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			setNombres(user.name)
			setApellidos(user.surname)
			setFechaNacimiento(user.fecha_nacimiento)
			setEmail(user.email)
			setSexo(user.sexo)
		}
	}, [user])


	const handleSubmit = (event) => {
		event.preventDefault();

		// Crear el objeto con los datos a enviar
		const data = {
			name: nombres,
			surname: apellidos,
			sexo,
			fecha_nacimiento: fechaNacimiento,
			email,
		};
		// Hacer la solicitud POST a la API

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}
		axios
			.post("http://192.168.16.90:8000/api/editar-perfil/", data, config)

			.then((response) => {
				console.log(response.data);
				const message = response?.data?.message
				Swal.fire({
					icon: 'success',
					text: message
				})
				navigate('/perfil')

			})
			.catch((error) => {
				console.error(error);
			});
	};

	const validateForm = () => {
		if (
			nombres.trim() === "" ||
			apellidos.trim() === "" ||
			sexo.trim() === "" ||
			fechaNacimiento.trim() === "" ||
			email.trim() === ""
		) {
			return false;
		}
		return true;
	};
	return (
		<div className="col-md-6 mx-auto mt-4">
			<h2 className="text-center w-100 mb-3">Editar Información:</h2>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="nombres" className="form-label fw-bold">
						Nombres
					</label>
					<input
						type="text"
						className="form-control"
						id="nombres"
						value={nombres}
						onChange={(e) => setNombres(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="apellidos" className="form-label fw-bold">
						Apellidos
					</label>
					<input
						type="text"
						className="form-control"
						id="apellidos"
						value={apellidos}
						onChange={(e) => setApellidos(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="sexo" className="form-label fw-bold">
						Sexo
					</label>
					<select
						className="form-control"
						id="sexo"
						value={sexo}
						onChange={(e) => setSexo(e.target.value)}
					>
						<option value=""></option>
						<option value="M">M</option>
						<option value="H">H</option>
					</select>
				</div>

				<div className="mb-3">
					<label htmlFor="fechaNacimiento" className="form-label fw-bold">
						Fecha de Nacimiento
					</label>
					<input
						type="date"
						className="form-control"
						id="fechaNacimiento"
						value={fechaNacimiento}
						onChange={(e) => setFechaNacimiento(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label fw-bold">
						E-mail
					</label>
					<input
						type="text"
						className="form-control"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-danger"
						disabled={!validateForm()}
					>
						Guardar
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditProfile