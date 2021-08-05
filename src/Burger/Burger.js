import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Burger = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Veg-Patty Burger</div>
                    <div className="item">Rs.70</div>
                </div>
                <div className="list">
                    <div className="item">Veg-Burger with Cheese</div>
                     <div className="item">Rs.85</div>
                </div>
                <div className="list">
                    <div className="item">Double Veg-Patty Burger(with cheese)</div>
                     <div className="item">Rs.110</div>
                </div>
                <div className="list">
                    <div className="item">Chicken Burger</div>
                    <div className="item">Rs.120</div>
                </div>
                <div className="list">
                    <div className="item">Chicken Burger with cheese</div>
                    <div className="item">Rs.135</div>
                </div>
            </div>
            
        )
}

export default Burger;