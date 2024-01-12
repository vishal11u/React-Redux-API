import React from 'react'

const Card = ({ item, handleClick }) => {
    const { id, title, image, price } = item;

    return (
        <div className='md:mx-16 '>
            <div className='border rounded lg:w-[12vw] my-4 text-center py-1'>
                <h1 className='py-0.5 float-right mr-1 w-7 rounded-full bg-gray-400 '>{id}</h1>
                <p className='text-xl font-semibold'>{title}</p>
                <img className=' px-24 lg:px-0' src={image} alt='' />
                <p className=' font-semibold'>${price}</p>
                <button className='border px-2 my-1 py-1 items-center rounded text-white bg-red-600 transition-all hover:scale-75 hover:bg-black' onClick={() => handleClick(item)} >Add to cart</button>
            </div>
        </div>
    )
}

export default Card;