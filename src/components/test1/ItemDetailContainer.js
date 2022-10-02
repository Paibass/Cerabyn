import React, {useEffect, useState} from 'react';

import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const { detalleId } = useParams();
	const [items, setItems] = useState([])

	useEffect(() => {
			getItems()
			}, [])

	const getItems = () => {
		const URL = "../items.json";
		fetch( URL )
			.then( res => res.json() )
			.then( data => {
				console.log( data );
				setItems( data.find(item => item.id === parseInt(detalleId)));
				console.log(detalleId);
				console.log(items)
			})
			.catch(err => { console.log("Hubo un error: ", err); })

	}

	return (
		<ItemDetail items={items} />
		);
}

export default ItemListContainer;