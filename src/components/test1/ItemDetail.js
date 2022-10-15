import { useEffect , useState } from "react";
import ItemCount from './ItemCount';
import { useCartContext } from '../../context/CartContext';
import { useParams, Link } from 'react-router-dom';
const ItemDetail = ( {items} ) => {

	const [goToCart, setGoToCart] = useState(false);
	const {addProduct} = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(items, quantity);
	}

	return (
		<div className="hero min-h-screen bg-base-200">
		  <div className="card items-center lg:card-side my-10  bg-base-100 shadow-xl max-w-7xl m-auto ">
		    <img src={items.Imagen} className="object-cover max-w-md shadow-2xl m-10 " />
		    <div className="flex flex-col justify-around text-center w-96">
		      <h1 className="text-5xl font-bold m-9">{items.Nombre}</h1>
		      <h2 className="text-4xl">Precio: ${items.Precio}</h2>
		      <p className="text-2xl py-6">{items.Detalle}</p>
		      {
		      	goToCart
		      		? <Link className="btn m-9" to='/cart'>Terminar Compra</Link>
					: <ItemCount initial={1} stock={10} onAdd={onAdd} />
		      }
		    </div>
		  </div>
		</div>
		)
}
export default ItemDetail;