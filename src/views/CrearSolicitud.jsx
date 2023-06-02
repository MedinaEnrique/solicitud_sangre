import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CrearSolicitud = () => {
	const [establecimientos, setEstablecimientos] = useState(null);

	const [nombreApellido, setNombreApellido] = useState("");
	const [cedula, setCedula] = useState("");
	const [tipoSangre, setTipoSangre] = useState("");
	const [establecimiento, setEstablecimiento] = useState("");
	const [volumen, setVolumen] = useState("");
	const [fechaLimite, setFechaLimite] = useState("");
	const [telefono, setTelefono] = useState("");
	const [descripcion, setDescripcion] = useState("");

	const sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
	const onlyNumbers = /^[0-9\b]+$/;

	useEffect(() => {
		axios
			.get("http://192.168.16.90:8000/api/locales")
			.then((response) => setEstablecimientos(response.data.data))
			.catch((error) => console.log(error));
	}, []);

	const validateForm = () => {
	
		console.log(onlyNumbers.test(cedula));
		if (nombreApellido.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "El nombre esta vacio",
				confirmButtonColor: "red",
			});
			return false
		} else if (cedula.trim() == "" || !onlyNumbers.test(cedula)) {
			Swal.fire({
				icon: "error",
				text: "Cedula invalida",
				confirmButtonColor: "red",
			});
			return false
		} else if (tipoSangre.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Seleccione un tipo de Sangre",
				confirmButtonColor: "red",
			});
			return false
		} else if (establecimiento.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Seleccione un establecimiento",
				confirmButtonColor: "red",
			});
			return false
		} else if (volumen.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Ingrese un volumen",
				confirmButtonColor: "red",
			});
			return false
		} else if (fechaLimite.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Seleccione una fecha válida",
				confirmButtonColor: "red",
			});
			return false
		} else if (telefono.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Ingrese un número de teléfono válido",
				confirmButtonColor: "red",
			});
			return false
		} else if (descripcion.trim() == "") {
			Swal.fire({
				icon: "error",
				text: "Ingrese una descripción",
				confirmButtonColor: "red",
			});
			return false
		}
		return true;
	};

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (validateForm()) {
			// Crear el objeto con los datos a enviar
			const data = {
				solicitud: descripcion,
				fecha_limite: fechaLimite,
				volumenes_necesarios: volumen,
				nombre_apellido_donatario: nombreApellido,
				cedula_donatario: cedula,
				telefono_contacto: telefono,
				tipo_sangre: tipoSangre,
				establecimiento
			};

			console.log(data)
			
			const token = localStorage.getItem("token")
			console.log(token)
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			// Hacer la solicitud POST a la API
			axios
				.post("http://192.168.16.90:8000/api/solicitudes", data, config)
				.then((response) => {
					console.log(response);
					navigate("/lista-solicitudes")
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}

	return (
		<div className="col-md-6 mx-auto mt-4">
			<form onSubmit={handleSubmit}>
				<h2 className="text-center w-100 mb-3">Nueva Solicitud</h2>
				<hr />
				<div className="mb-3">
					<label htmlFor="nombreApellido" className="form-label fw-bold">
						Nombre y Apellido
					</label>
					<input
						type="text"
						className="form-control"
						id="nombreApellido"
						placeholder="Escriba su nombre y apellido aquí"
						onChange={(e) => setNombreApellido(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="cedula" className="form-label fw-bold">
						Cédula
					</label>
					<input
						type="text"
						className="form-control"
						id="cedula"
						placeholder="Escriba su cedula aquí"
						onChange={(e) => setCedula(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tipoSangre" className="form-label fw-bold">
						Tipo de Sangre
					</label>
					<select
						className="form-select"
						id="establecimiento"
						defaultValue={""}
						onChange={(e) => setTipoSangre(e.target.value)}
					>
						<option value={""}></option>
						{sangre &&
							sangre.map((item, index) => (
								<option key={index} value={index+1}>
									{item}
								</option>
							))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="establecimiento" className="form-label fw-bold">
						Establecimiento
					</label>
					<select
						className="form-select"
						id="establecimiento"
						defaultValue={""}
						onChange={(e) => setEstablecimiento(e.target.value)}
					>
						<option value={""}></option>
						{establecimientos &&
							establecimientos.map((item, index) => (
								<option key={index} value={item.local_donacion}>
									{item.local_donacion}
								</option>
							))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="volumen" className="form-label fw-bold">
						Volumen
					</label>
					<input
						type="text"
						className="form-control"
						id="volumen"
						placeholder="Escriba el volumen aquí"
						onChange={(e) => setVolumen(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="fechaLimite" className="form-label fw-bold">
						Fecha Límite
					</label>
					<input
						type="date"
						className="form-control"
						id="fechaLimite"
						placeholder="Escriba la fecha limite aquí"
						onChange={(e) => setFechaLimite(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="telefono" className="form-label fw-bold">
						Teléfono
					</label>
					<input
						type="text"
						className="form-control"
						id="telefono"
						placeholder="Escriba el telefono aquí"
						onChange={(e) => setTelefono(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="descripcion" className="form-label fw-bold">
						Descripción
					</label>
					<textarea
						type="text"
						className="form-control"
						id="descripcion"
						rows="3"
						onChange={(e) => setDescripcion(e.target.value)}
					/>
				</div>
				<div className="d-grid">
					<button type="submit" className="btn btn-primary btn-danger">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default CrearSolicitud;
