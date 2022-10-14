import { useEffect , useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from "./ItemList";

const ItemListContainer = () => {
	
	const [items, setItems] = useState([])

	useEffect(() => {
			const querydb = getFirestore();
			const queryCollection = collection(querydb, 'Productos');
			getDocs(queryCollection)
			.then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
			}, [])

	return(
		<div class="hero min-h-screen bg-base-200">
        		<div class="hero-content text-center">
            		<ItemList items={items}/>
        		</div>
   			</div>
		)
}

export default ItemListContainer