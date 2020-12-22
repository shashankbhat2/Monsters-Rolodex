import React from 'react'
import './button.styles.css'

const Button = ({handleButtonChange, searchInput}) => {
    return(
        <button className="button" onClick={handleButtonChange}>
            {searchInput ? "Close Search" : "Show Search"}
        </button>
    )
}

export default Button;