import { Link } from 'react-router-dom';

const Item = ( {Nombre, Precio, Imagen, id} ) => {
	return (
		<Link to={`/productos/${id}`} >
		<div className="card m-4 bg-base-100 shadow-xl hover:scale-105">
	        <figure className="px-10 pt-10">
	            <img src={Imagen} alt={Nombre} className="object-content h-48 w-96 rounded-xl" />
	        </figure>
	        <div className="card-body items-center text-center">
	            <h2 className="card-title">{Nombre}</h2>
	            <p>Precio: ${Precio}</p>
	        </div>
   		</div>
   		</Link>
	);
}
export default Item;