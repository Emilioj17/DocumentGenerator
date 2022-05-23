import React from "react";

const Opciones = ({ opcion, setOpcion }) => {
	const Handler = (event) => {
		setOpcion(event.target.name);
	};

	return (
		<div className='row small-up-2 medium-up-3 large-up-4'>
			<div className='column'>
				<a
					className={
						opcion == "Poder SII" ? "button primary" : "button secondary"
					}
					name='Poder SII'
					onClick={(e) => Handler(e)}
				>
					Poder SII
				</a>
			</div>
			<div className='column'>
				<a
					disabled
					className='button secondary disabled'
					name='Poder Municipal'
				>
					Poder Municipal
				</a>
			</div>
			<div className='column'>
				<a
					disabled
					className='button secondary disabled'
					name='Contrato Arriendo Mensual'
				>
					Contrato Arriendo Mensual
				</a>
			</div>
			<div className='column'>
				<a
					disabled
					className='button secondary disabled'
					name='Contrato Arriendo Anual'
				>
					Contrato Arriendo Anual
				</a>
			</div>
			<div className='column'>
				<a
					disabled
					className='button secondary disabled'
					name='Contrato Arriendo 30 dias'
				>
					Contrato Arriendo 30 dias
				</a>
			</div>
			<div className='column'>
				<a
					disabled
					className='button secondary disabled'
					name='Contrato Contabilidad'
				>
					Contrato Contabilidad
				</a>
			</div>
		</div>
	);
};

export default Opciones;
