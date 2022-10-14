import React, {useEffect, useState} from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const { detalleId } = useParams();
	const [items, setItems] = useState([])

	useEffect(() => {
			const querydb = getFirestore();
			const querydoc = doc(querydb, 'Productos', detalleId);
			getDoc(querydoc)
			.then(res => setItems({ id: res.id, ...res.data() }))
			}, [])



	return (
		<ItemDetail items={items} />
		);
}

export default ItemListContainer;