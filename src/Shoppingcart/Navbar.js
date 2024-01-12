import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ size, setShow }) => {
    return (
        <div className='flex justify-around py-5 border-b-2' >
            <div className='text-3xl font-semibold cursor-pointer' onClick={() => setShow(true)}>
                <h1>Menu items</h1>
            </div>
            <div className='flex cursor-pointer' onClick={() => setShow(false)}>
                <h1 className='text-gray-400'><FaShoppingCart size={40} /></h1>
                <p className='rounded-full absolute bg-black h-[18px] px-1.5 text-white text-[12px]'>{size}</p>
            </div>
        </div>
    )
}

export default Navbar;