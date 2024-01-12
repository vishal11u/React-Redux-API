import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

const BadgeRedux = () => {
    const Number = useSelector(state => state.cart)

    return (
        <div>
            <Badge badgeContent={Number.length} color="success">
                <ShoppingBasketIcon sx={{ fontSize: "32px" }} />
            </Badge>

        </div>
    )
}

export default BadgeRedux;