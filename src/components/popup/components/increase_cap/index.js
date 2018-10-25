import React from 'react';
import {displayPopup} from '../../../popup';
import * as subscriptions from '../../../../json/increase_cap.json';
import './index.css';

export default class Increase extends React.Component {
    render() {
        const handleClick = () => {
            displayPopup();
        };

        return (
            <div className="increase">
                <div>
                    <div className="headerEntitlement">Add licences<button className="closeButton" onClick={handleClick}>X</button></div>
                    <div className="d-flex row">
                        <div className="content-increase-div col col-lg-12">
                            <ul>
                                {subscriptions.subscriptions.map( (subscriptionItem,index) => (
                                    <li key={index} className="d-flex align-items-center">
                                        <div className="col col-lg-1"><img className="increase-subscriptions-image " src={`${subscriptionItem.image}`} alt=""/></div>
                                        <span className="increase-subscriptions-name col col-lg-4">{subscriptionItem.name}<br/>{subscriptionItem.version}</span>
                                        <span className="increase-subscriptions-cap col col-lg-4">Actual CAP: <strong> {subscriptionItem.actual_cap}</strong></span>
                                        <span className="increase-subscriptions-new-cap col col-lg-4 row "> New Cap: <input type="number" className="col col-lg-4"/></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="  col col-lg-12">
                            <div className="text-center payment-part-popup col col-lg-12">
                                <button>CONFIRM ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};