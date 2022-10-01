import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    console.log('hiciste click');
    setCounter( counter + 1 ) // counter++ -> counter = counter + 1
  }

  const rest = () => {
    console.log('hiciste click');
    setCounter( counter - 1)
  }

  return (
    <div className="App">
    <Navbar/>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">

        </div>
    </div>
    </div>
  );
}

export default App;
