import React, { useEffect, useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	const decrease = () => {
		setCount(count - 1);
	}

	const increase = () => {
		 setCount(count + 1);
	}

	useEffect(() => {
		setCount(parseInt(initial));

	}, [initial])

	return (
		<div>
			<button className="btn" disabled={count <= 1} onClick={decrease}>-</button>
			<span className="px-5">{count}</span>
			<button className="btn" disabled={count >= stock} onClick={increase}>+</button>
			<div>
				<button className="btn m-5"  disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
			</div>
		</div>	
		);
}

export default ItemCount;