import React, { useState } from 'react'
import Cart from './Shoppingcart/Cart'
import Navbar from './Shoppingcart/Navbar'
import ShoppingCart from './Shoppingcart/ShoppingCart'
import Footer from './Shoppingcart/Footer';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    console.log(item)
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 1000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = [...cart]; // Create a copy of the array
    if (ind !== -1) {
      tempArr[ind].amount += d;
      // Ensure the amount doesn't go below 1
      if (tempArr[ind].amount < 1)
        tempArr[ind].amount = 1;
      setCart(tempArr); // Update the cart state with the modified array
    }
  }

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {
        warning && <div className='py-2 px-3 absolute bg-red-600 w-[10vw] transition-all rounded-lg text-white float-right mt-2 ml-2 text-center'>⚠️ Product is Alredy Added ⚠️</div>
      }
      {
        show ? <Cart handleClick={handleClick} /> : <ShoppingCart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      <Footer />
    </React.Fragment>
  )
}

export default App;
