import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Pizza = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Mix-Veg Pizza</div>
                    <div className="item">Rs.140</div>
                </div>
                <div className="list">
                    <div className="item">Cheese Pizza</div>
                     <div className="item">Rs.140</div>
                </div>
                <div className="list">
                    <div className="item">Paneer Pizza</div>
                     <div className="item">Rs.160</div>
                </div>
                <div className="list">
                    <div className="item">Corn Pizza</div>
                    <div className="item">Rs.130</div>
                </div>
                <div className="list">
                    <div className="item">Chicken Pizza</div>
                    <div className="item">Rs.190</div>
                </div>
            </div>
            
        )
}

export default Pizza;