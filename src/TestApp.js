import ItemListContainer from "./components/test1/ItemListContainer"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemDetail from './components/test1/ItemDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

const TestApp = () => {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path='/' element={<ItemListContainer/>}/>
				<Route path='/:id' element={<ItemDetail/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}
export default TestApp