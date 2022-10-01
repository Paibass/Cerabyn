import ItemListContainer from "./components/test1/ItemListContainer"
import Navbar from './components/Navbar';

const TestApp = () => {
	return (
		<div>
			<Navbar/>
			<div class="hero min-h-screen bg-base-200">
        		<div class="hero-content text-center">
            		<ItemListContainer/>
        		</div>
   			</div>
		</div>
	)
}
export default TestApp