import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Counter from './Counter.jsx';

function App() {

  
  const [count, setCount] = useState(0);

  const pageTitle = "This is the title";

  const copyright = "© 2022-2023 Developed by Vince. All rights reserved.";

  //condition to change when count is above 5
  const headerStyle = count > 5 ? { color: 'red' } : { color: 'white' };
 
    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        if (count > 0){
        setCount(count - 1);
        }
    }

  

  return (
    <>
      <Header title={pageTitle} headerStyle={headerStyle}  />
      


      <Counter count={count} increment={increment} decrement={decrement}   />


      <br></br>



      <Footer copyright={copyright} />
    </>
  )
}

export default App
