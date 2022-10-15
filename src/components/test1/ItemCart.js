import { useCartContext } from '../../context/CartContext';
const ItemCart = ({ product }) => {
	const { removeProduct } = useCartContext();

	return (
		<div>
			<div className="flex justify-between border-b border-b-amber-300">
			<img className="w-60 m-2 " src={product.Imagen} alt={product.Nombre} />
			<div className="flex flex-col p-4 justify-center text-center">
				<p className="text-5xl ">Titulo: {product.Nombre}</p>
				<p className="text-4xl my-2">Cantidad: {product.quantity}</p>
				<p className="text-2xl my-2">Precio: {product.Precio}</p>
				<p className="text-2xl">Subtotal: ${product.quantity * product.Precio}</p>
				</div>
				<div className="flex flex-col justify-center mx-9">
				<button className="btn" onClick={() => removeProduct(product.id)}>Eliminar</button>
				</div>
			</div>		
		</div>
		);
}

export default ItemCart;