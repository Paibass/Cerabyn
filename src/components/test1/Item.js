import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const Item = ( {Nombre, Precio, Imagen, id} ) => {
	return (
		<Link to={`/productos/${id}`} >
		<div className="card w-100 mx-3 bg-base-100 shadow-xl">
	        <figure className="px-10 pt-10">
	            <img src={Imagen} alt={Nombre} className="rounded-xl" />
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