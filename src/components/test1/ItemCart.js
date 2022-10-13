import { useCartContext } from '../../context/CartContext';
const ItemCart = ({ product }) => {
	const { removeProduct } = useCartContext();

	return (
		<div>	
			<img src="" alt="" />
			<div>
				<p>Titulo: {product.nombre}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio: {product.precio}</p>
				<p>Subtotal: ${product.quantity * product.precio}</p>
				<button className="btn" onClick={() => removeProduct(product.id)}>Eliminar</button>
			</div>	
		</div>
		);
}

export default ItemCart;