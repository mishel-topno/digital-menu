import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Sandwich = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Veg Sandwich</div>
                    <div className="item">Rs.35/70</div>
                </div>
                <div className="list">
                    <div className="item">Chicken Sandwich</div>
                     <div className="item">Rs.50/100</div>
                </div>
                <div className="list">
                    <div className="item">Paneer Sandwich</div>
                     <div className="item">Rs.45/90</div>
                </div>
            </div>
            
        )
}

export default Sandwich;