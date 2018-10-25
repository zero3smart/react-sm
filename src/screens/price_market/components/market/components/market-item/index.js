import React from 'react';
import './index.css';

export default class MarketItem extends React.Component {
    render() {
        return (
            <div className="market-item">
                <img alt="{this.props.subscription.name} picto" src={this.props.subscription.image} />
                <span>{this.props.subscription.name}</span>
            </div>
        );
    }
}