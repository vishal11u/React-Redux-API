import React from 'react';
import BadgeRedux from './Badge';
import {Link} from 'react-router-dom'

const ReduxNavbar = () => {
    return (
        <div className='flex justify-around h-20 items-center bg-gray-600 text-white z-20 top-0 left-0 sticky'>
            <div className='text-2xl '>
                <Link to='/' className='items-center'>🏠Home</Link>
            </div>
            <Link to='/shopping'>
                <BadgeRedux />
            </Link>
        </div>
    )
}

export default ReduxNavbar;