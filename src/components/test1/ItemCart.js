import { useCartContext } from '../../context/CartContext';
const ItemCart = ({ product }) => {
	const { removeProduct } = useCartContext();

	return (
		<div>	
			<img src={product.Imagen} alt={product.Nombre} />
			<div>
				<p>Titulo: {product.Nombre}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio: {product.Precio}</p>
				<p>Subtotal: ${product.quantity * product.Precio}</p>
				<button className="btn" onClick={() => removeProduct(product.id)}>Eliminar</button>
			</div>	
		</div>
		);
}

export default ItemCart;