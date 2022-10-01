import { useEffect , useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
	
	const [items, setItems] = useState([])

	useEffect(() => {
		setTimeout(() => {
			getItems()
		}, 1000);
			}, [])

	const getItems = () => {
		const URL = "items.json";
		fetch( URL )
			.then( res => res.json() )
			.then( data => {
				console.log( data );
				setItems( data )
			})
			.catch(err => { console.log("Hubo un error: ", err); })

	}


	return(
		<div>
			<ItemList items={items}/>
		</div>
		)

}

export default ItemListContainer