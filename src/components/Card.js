import React from 'react'
import './Card.css'


const Card = props =>
(    <div className="Card">
        <img src={props.img} />
        <h3>{props.title}</h3>
        <button>{props.date}</button>
        <p>{props.text}</p>
    </div>)


export default Card
