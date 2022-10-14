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
		  <div className="hero-content rounded-lg bg-base-100 flex-col">
		    <img src={items.Imagen} className="max-w-sm rounded-lg shadow-2xl" />
		    <div className="text-center">
		      <h1 className="text-5xl font-bold">{items.Nombre}</h1>
		      <p className="py-6">{items.Detalle}</p>
		      {
		      	goToCart
		      		? <Link to='/cart'>Terminar Compra</Link>
					: <ItemCount initial={1} stock={10} onAdd={onAdd} />
		      }
		    </div>
		  </div>
		</div>
		)
}
export default ItemDetail;