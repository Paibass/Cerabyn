import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if(cart.length === 0){
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link className="btn" to='/'>Hacer Compra</Link>
			</>	
			);
	}

	return (
		<>
			{
				cart.map(product => <ItemCart key={product.id} product={product} />)
			}
			<p>
				Total: ${totalPrice()}
			</p>
		</>
	)
}

export default Cart;