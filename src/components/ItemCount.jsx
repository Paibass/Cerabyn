import { useEffect, useState } from 'react';
const ItemCount = () => {
  const [counter, setCounter,] = useState(0);


  let stock = 15;




  const add = () => {
    console.log('hiciste click');
    if(counter < stock){
      setCounter( counter + 1 );
    } 
  }

  const rest = () => {
    console.log('hiciste click');
    if(counter <= stock){
      setCounter( counter - 1 );
    }
  }
  return(
    <div>
      <p className="p-2">Stock: {stock}</p> 
        <div className="card-actions">        
            <button onClick={rest} className= "btn btn-primary"> - </button>
            <button onClick={add} className="btn btn-primary"> + </button>
      </div>
      <p className="p-2">Contador: {counter}</p>
    </div> 
    )
}
export default ItemCount  


