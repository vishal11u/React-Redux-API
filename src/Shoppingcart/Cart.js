import React from 'react'
import ApiCart from './ApiCart'
import Card from './Card'

const Cart = ({ handleClick }) => {

    return (
        <div className='flex justify-center flex-wrap mx-5'>
            {
                ApiCart.map((item) => (
                    <Card key={item.id} item={item} handleClick={handleClick} />
                ))
            }
        </div>
    )
}

export default Cart;