import React from 'react';
import * as subscriptions from '../../../../json/subscriptions.json'
import './index.css';
import MarketItem from "./components/market-item/index";

export default class Market extends React.Component {
    render() {
        return (
            <div className="content  pt-2">
                <h1>SELECT AN APP</h1>
                <div className="d-flex market-content">
                    {subscriptions.subscriptions.map( (subscription,index) => (
                        <MarketItem subscription={subscription} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}