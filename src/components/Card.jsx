import React from "react";
import '../stylessheets/Card.css'

function Card ({title, p1, p2}) {
    return (
        <div className="Card">
            <h2 className="title">{title}</h2>
            <p className="p1">{p1}</p>
            <p className="p2">{p2}</p>
        </div>
    );
}

export default Card;