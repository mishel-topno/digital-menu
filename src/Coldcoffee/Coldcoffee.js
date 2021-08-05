import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Coldcoffee = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Regular Cold Coffee</div>
                    <div className="item">Rs.70</div>
                </div>
                <div className="list">
                    <div className="item">Kit-Kat Cold Coffee</div>
                     <div className="item">Rs.100</div>
                </div>
                <div className="list">
                    <div className="item">Oreo Cold Coffee</div>
                     <div className="item">Rs.90</div>
                </div>
            </div>
            
        )
}

export default Coldcoffee;