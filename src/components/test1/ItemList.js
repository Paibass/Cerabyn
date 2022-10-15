import Item from "./Item"

const ItemList = ( {items} ) => {
	return (
		<div className="flex flex-wrap justify-center">
			{ items.map ( i => <Item key={i.id} {...i} /> ) }
		</div>

	)
}

export default ItemList