import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
const ItemDetail = ( {items} ) => {


	return (
		<div className="hero min-h-screen bg-base-200">
		  <div className="hero-content flex-col lg:flex-row">
		    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
		    <div className="text-center">
		      <h1 className="text-5xl font-bold">{items.nombre}</h1>
		      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		      <button className="btn btn-primary">Get Started</button>
		    </div>
		  </div>
		</div>
		)
}
export default ItemDetail