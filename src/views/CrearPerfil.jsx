import axios from "axios";
import { useState } from "react";


const CrearPerfil = () => {
	const [nombres, setNombres] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [cedulaIdentidad, setCedulaIdentidad] = useState("");
	const [sexo, setSexo] = useState("");
	const [fechaNacimiento, setFechaNacimiento] = useState("");
	const [email, setEmail] = useState("");
	const [contrasenha, setContrasenha] = useState("");
	const [confirmarContrasenha, setConfirmarContrasenha] = useState("");
	const [errorContrasenha, setErrorContrasenha] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (contrasenha !== confirmarContrasenha) {
			setErrorContrasenha("Las contraseñas no coinciden");
			return;
		}

		if (!validateForm()) {
			return;
		}

		// Crear el objeto con los datos a enviar
		const data = {
			name: nombres,
			surname: apellidos,
			nro_cedula: cedulaIdentidad,
			sexo,
			fecha_nacimiento: fechaNacimiento,
			email,
			password: contrasenha,
		};

		// Hacer la solicitud POST a la API
		axios
			.post("http://192.168.16.90:8000/api/registro", data)
			.then((response) => {
				console.log(response.data.token);
				localStorage.setItem("token", response.data.token);
				
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
			email.trim() === "" ||
			contrasenha.trim() === "" ||
			confirmarContrasenha.trim() === ""
		) {
			return false;
		}
		return true;
	};

	return (
		<div className="col-md-6 mx-auto mt-4">
			<h2 className="text-center w-100 mb-3">Nuevo Perfil</h2>
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
					<label htmlFor="cedulaIdentidad" className="form-label fw-bold">
						Cédula de Identidad
					</label>
					<input
						type="text"
						className="form-control"
						id="cedulaIdentidad"
						value={cedulaIdentidad}
						onChange={(e) => setCedulaIdentidad(e.target.value)}
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
						<option value="M">F</option>
						<option value="H">M</option>
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
				<div className="mb-3">
					<label htmlFor="contrasenha" className="form-label fw-bold">
						Contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="contrasenha"
						value={contrasenha}
						onChange={(e) => setContrasenha(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="confirmarContrasenha" className="form-label fw-bold">
						Confirmar Contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="confirmarContrasenha"
						value={confirmarContrasenha}
						onChange={(e) => setConfirmarContrasenha(e.target.value)}
					/>
					{errorContrasenha && (
						<div className="text-danger">{errorContrasenha}</div>
					)}
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
	);
};

export default CrearPerfil;
