import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { remove, increaseQuantity, decreaseQuantity } from '../SliceRedux';

const ReduxShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item.id));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <div className="">
      <div className='flex justify-center gap-12 w-full items-center'>
        <h2 className="text-center text-4xl py-8 font-semibold">Redux Shopping Cart 🛍️</h2>
        <div className="">
          <p className="text-xl px-5 py-2 bg-red-600 text-white rounded shadow-lg">Total Price: ₹{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {!cartItems.length ? (
        <p className="flex justify-center items-center h-32 w-full bg-gray-100 rounded-lg">
          Your shopping cart is empty! Add some products to start shopping.
        </p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-center">
            <div className="flex items-center w-[90vw] px-5 lg:w-[60vw] justify-between lg:px-16 rounded-lg shadow-lg py-3 mt-5 border transition-all hover:scale-[1.03]">
              <img className="h-32 w-[30vw] md:h-36 md:w-[20vw] lg:w-[8vw] p-2" src={item.image} alt="img" />
              <div className="text-center">
                <h1 className="text-sm">{item.title}</h1>
                <p>₹{item.price}</p>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <button className="text-[30px] text-red-600" onClick={() => handleDecreaseQuantity(item)} > - </button>
                  <p className="text-xl">{item.quantity}</p>
                  <button className="text-[30px] text-green-600" onClick={() => handleIncreaseQuantity(item)}> + </button>
                </div>
              </div>
              <button className="text-[30px] text-red-600" onClick={() => handleRemove(item)}>
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        )))}
    </div>
  );
};

export default ReduxShoppingCart;
