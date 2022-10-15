import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	const order = {
		buyer:{
			nombre: 'Juan',
			email: 'JuanTermno@gmail.com',
			telefono: '112233445',
			direccion: 'siempreviva 343'
		},
		items: cart.map(product => ({ id: product.id, nombre: product.Nombre, precio: product.Precio, cantidad: product.quantity })),
		total: totalPrice() ,
	}

	const handleClick = () => {
		const db = getFirestore();
		const orderCollection = collection(db, 'orders');
		addDoc(orderCollection, order)
		.then(({ id }) => console.log(id))
	}

	if(cart.length === 0){
		return (
			<div className="flex flex-col items-center">
				<p className="text-5xl m-9">No hay elementos en el carrito</p>
				<Link className="btn text-2xl m-9" to='/'>Hacer Compra</Link>
			</div>	
			);
	}

	return (
		<div className="flex flex-col">
			{
				cart.map(product => <ItemCart key={product.id} product={product} />)
			}
			<div className="flex justify-end items-center">			
			<button onClick={handleClick} className="btn">Checkout</button>
			<p className="flex  text-4xl m-9">
				Total: ${totalPrice()}
			</p>
			</div>
		</div>
	)
}

export default Cart;