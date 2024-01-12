import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const ShoppingCart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0)

    const totalPrice = () => {
        let total = 0;
        cart.map((item) => (
            total += item.amount * item.price
        ))
        setPrice(total);
    };

    const removeCart = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
    }

    useEffect(() => {
        totalPrice();
    });

    return (
        <div className=''>
            <div className='text-center text-4xl font-semibold py-4'>
                <h1 className=''>Your Cart</h1>
            </div>
            {cart?.map((item) => (
                <div key={item.id}>
                    <div className='flex justify-around items-center py-5  border-b'>
                        <div className='flex items-center gap-10'>
                            <div className=''>
                                <p className='bg-gray-400 hidden md:block px-2.5 rounded-full text-lg'>{item.id}</p>
                            </div>
                            <div className='text-center'>
                                <img className='h-28 shadow-lg rounded-md border' src={item.image} alt='' />
                                <div className='text-xl pt-1 font-semibold'>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button className='bg-gray-400 py-1 px-1 rounded-lg' onClick={() => handleChange(item, -1)}>
                                <FaMinus />
                            </button>
                            <p className='border-2 px-2 text-lg rounded-md'>{item.amount}</p>
                            <button className='bg-gray-400 py-1 px-1 rounded-lg' onClick={() => handleChange(item, +1)}>
                                <FaPlus size={16} />
                            </button>
                        </div>
                        <div className='flex items-center gap-5 md:gap-10'>
                            <p className='md:text-2xl font-semibold'>${item.price}</p>
                            <button onClick={() => removeCart(item.id)}>
                                <MdDelete className='text-red-700' size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='py-5 text-center'>
                <h1 className='text-2xl font-semibold'>Total : $ {price}</h1>
            </div>
        </div>
    );
};

export default ShoppingCart;
