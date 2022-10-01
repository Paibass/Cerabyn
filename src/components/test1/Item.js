import ItemCount from '../ItemCount';

const Item = ( {nombre, precio} ) => {
	return (
		<div className="card w-100 mx-3 bg-base-100 shadow-xl">
	        <figure className="px-10 pt-10">
	            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
	        </figure>
	        <div className="card-body items-center text-center">
	            <h2 className="card-title">{nombre}</h2>
	            <p>Precio: ${precio}</p>
	            <ItemCount/>
	        </div>
   		</div>
	)
}
export default Item