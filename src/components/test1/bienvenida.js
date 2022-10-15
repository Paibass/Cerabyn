import { Link } from 'react-router-dom';

const Bienvenida = () => {
	return(
		<div className="hero min-h-screen bg-base-200">
		  <div className="hero-content text-center">
		    <div className="max-w-lg">
		      <h1 className="text-7xl font-bold">¡Bienvenido a nuestra Tienda!</h1>
		      <p className="text-4xl py-6">Te invitamos a que mires nuestros productos</p>
		      <Link className="btn" to={'/productos'}>Ver Productos</Link>
		    </div>
		  </div>
		</div>
		)
}

export default Bienvenida;