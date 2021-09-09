import React from 'react'
import "../styles/MenuItems.css";


const MenuItem = ({ title }) => {
    return (
        <div className='menuItem' >
            <h4>{title}</h4>
        </div>
    )
}

export default MenuItem
