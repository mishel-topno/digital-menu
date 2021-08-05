import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Shakes = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Oreo Cookies</div>
                    <div className="item">Rs.120</div>
                </div>
                <div className="list">
                    <div className="item">Kit-Kat Shake</div>
                     <div className="item">Rs.130</div>
                </div>
                <div className="list">
                    <div className="item">Dairy Milk Shake</div>
                     <div className="item">Rs.145</div>
                </div>
            </div>
            
        )
}

export default Shakes;