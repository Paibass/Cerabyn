import ItemListContainer from "./components/test1/ItemListContainer"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemDetailContainer from './components/test1/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

const TestApp = () => {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path='/' element={<ItemListContainer/>}/>
				<Route path='/productos' element={<ItemListContainer/>}/>
				<Route path='/productos/:detalleId' element={<ItemDetailContainer/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}
export default TestApp