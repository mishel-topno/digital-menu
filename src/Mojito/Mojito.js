import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const Mojito = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Red Mojito</div>
                    <div className="item">Rs.50</div>
                </div>
                <div className="list">
                    <div className="item">Blue Mojito</div>
                     <div className="item">Rs.50</div>
                </div>
                <div className="list">
                    <div className="item">Yellow Mojito</div>
                     <div className="item">Rs.50</div>
                </div>
                <div className="list">
                    <div className="item">Green Mojito</div>
                    <div className="item">Rs.50</div>
                </div>
                <div className="list">
                    <div className="item">Amber Mojito</div>
                    <div className="item">Rs.50</div>
                </div>
            </div>
            
        )
}

export default Mojito;