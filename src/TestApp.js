import ItemListContainer from "./components/test1/ItemListContainer"
import Cart from "./components/test1/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemDetailContainer from './components/test1/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import CartProvider from './context/CartContext';


const TestApp = () => {
	return (
		<BrowserRouter>
		<CartProvider>
			<Navbar/>
			<Routes>
				<Route path='/' element={<ItemListContainer/>}/>
				<Route path='/cart' element={<Cart />} />
				<Route path='/productos' element={<ItemListContainer/>}/>
				<Route path='/productos/:detalleId' element={<ItemDetailContainer/>}/>
			</Routes>
			<Footer/>
		</CartProvider>	
		</BrowserRouter>
	)
}
export default TestApp