import React from 'react'
import './card.styles.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" className="card-img" src={`https://robohash.org/${props.monster.id}?set=set2`}/>
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;
