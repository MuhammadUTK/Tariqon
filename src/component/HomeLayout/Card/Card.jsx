import React from 'react'
import "./Card.css"
import view from '../../../assets/view.png';

function Card({ title, path, type }) {

    console.log(path)
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img src={path} alt="card image"/>
                    <div className="hover-overlay">
                        <img src={view} alt="View image"/>
                    </div>
                </div>
                <div className="card-text">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-type">{type}</p>
                </div>
            </div>
        </div>
    )
}

export default Card