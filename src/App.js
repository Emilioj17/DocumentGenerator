import React, { Fragment, useState } from "react";
import "./Style/GeneradorDocumentos.css";
import "./Style/App.css";
import Cedula from "./Img/Cedula.jpg";
import Head from "./Component/Head";
import Opciones from "./Component/Opciones";
import Formulario from "./Component/Formulario";
import { PoderSII } from "./Helper/PoderSII";

function App() {
	const [img, setImg] = useState(Cedula);
	const [datos, setDatos] = useState({
		nombre: "",
		rut: "",
		razon: "",
		rutEmpresa: "",
		fecha: "",
		nacionalidad: "",
	});
	const [opcion, setOpcion] = useState("Poder SII");
	const [alert, setAlert] = useState(false);

	const HandlerClick = () => {
		if (
			datos.nombre.trim() === "" ||
			datos.rut.trim() === "" ||
			datos.razon.trim() === "" ||
			datos.rutEmpresa.trim() === "" ||
			datos.nacionalidad.trim() === "" ||
			datos.fecha.trim() === ""
		) {
			setAlert(true);
		} else {
			setAlert(false);
			if (opcion == "Poder SII" && img != Cedula) {
				PoderSII(datos, img);
			} else {
				setAlert(true);
			}
		}
	};

	const HandlerReset = () => {
		setDatos({
			nombre: "",
			rut: "",
			razon: "",
			rutEmpresa: "",
			fecha: "",
			nacionalidad: "",
		});
		setImg(cedula);
	};

	const titulosHead = [
		"Bienvenido al Generador de Documentos",
		"Elige una opción, y genera tus documentos.",
	];

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<Opciones opcion={opcion} setOpcion={setOpcion} />
			<hr />
			{alert ? (
				<div className='callout alert text-center'>
					Todos los Datos son Necesarios
				</div>
			) : null}
			<Formulario img={img} setImg={setImg} datos={datos} setDatos={setDatos} />
			<div className='row'>
				<div className='small-5 medium-10 columns'>
					<button className='button expanded' onClick={(e) => HandlerClick(e)}>
						Generar {opcion}
					</button>
				</div>
				<div className='small-5 medium-2 columns'>
					<button className='alert button' onClick={(e) => HandlerReset(e)}>
						Reset
					</button>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
