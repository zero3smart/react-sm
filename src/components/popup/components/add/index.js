import React from 'react';
import {displayPopup} from '../../../popup';
import * as subscriptions from '../../../../json/add_licences.json';
import './index.css';

export default class Add extends React.Component {

    constructor(props){
        super(props);
        this.state = {payment: false};
    }

    render() {

        const modifyPayment = () => {
            document.getElementsByClassName("add")[0].style.width = "80%";
            document.getElementsByClassName("add")[0].style.left = "10%";
            document.getElementsByClassName("content-add-div")[0].className = "content-add-div col col-lg-7";
            document.getElementsByClassName("payment-part-popup")[0].className = "text-center payment-part-popup  col col-lg-5";
        };


        const handleClick = () => {
            displayPopup();
        };

        const updateNumber = (event) => {
            let value = parseInt(document.getElementById(`${event.target.dataset.index}-subscription-licence`).value, 10);
            if(!value){
                value = 0;
            }
            if(event.target.className === "plus-button"){
                value +=1;
                document.getElementById(`${event.target.dataset.index}-subscription-licence`).value = parseInt(value, 10);
                updatePrice(value, event.target.dataset.index);
            }
            else {
                if (value >= 1){
                    value -=1;
                    document.getElementById(`${event.target.dataset.index}-subscription-licence`).value = parseInt(value, 10);
                    updatePrice(value, event.target.dataset.index);
                }
            }
        };

        const updatePrice = (unit, index) => {
            if(unit !== 0){
                let value = parseFloat(document.getElementById(`${index}-subscription-price`).dataset.price);
                let newValue = (value * parseInt(unit, 10)).toFixed(2);
                document.getElementById(`${index}-subscription-price`).textContent = newValue;
            }

        };

        const updateNumberKeyPress = (event) => {
            let unit = parseFloat(event.target.value);
            let unit_price = parseFloat(event.target.parentNode.parentNode.nextSibling.childNodes[1].dataset.price);
            console.log(unit, unit_price);
            if(!unit){
                unit = 0;
            }
            if(unit !== 0) {
                let updated_value = (unit * unit_price).toFixed(2);
                console.log(updated_value);
                event.target.parentNode.parentNode.nextSibling.childNodes[1].textContent = updated_value;
            }
        };

        const updatePriceSelect = (event) => {
            let unit = event.target.parentNode.nextSibling.childNodes[0].childNodes[0].value;
            let unit_price = event.target.value;
            if( !unit || unit === 0){
                unit = 1;
            }
            let updated_value = (unit * unit_price).toFixed(2);
            event.target.parentNode.nextSibling.nextSibling.childNodes[1].textContent = updated_value;
            event.target.parentNode.nextSibling.nextSibling.childNodes[1].dataset.price = unit_price;
        };


        return (
            <div className="add">
                <div>
                    <div className="headerEntitlement">Add licences<button className="closeButton" onClick={handleClick}>X</button></div>
                    <div className="d-flex row">
                    <div className="content-add-div col col-lg-12">
                        <ul>
                            {subscriptions.subscriptions.map( (subscriptionItem,index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center">
                                    <div className="col col-lg-1"><img className="add-subscriptions-image " src={`${subscriptionItem.image}`} alt=""/></div>
                                    <span className="add-subscriptions-name col col-lg-4">{subscriptionItem.name}</span>
                                    {subscriptionItem.items.length > 0 ?
                                        <span className="add-subscriptions-name col-3">
                                            <select onChange={updatePriceSelect}>
                                            {subscriptionItem.items.map((item, index) => (
                                                <option key={index} value={item.price}>{item.name}</option>
                                            ))}
                                        </select>
                                        </span>
                                        :
                                        <span className="add-subscriptions-name col-3"></span>
                                    }
                                    <div className="col col-lg-2 d-flex justify-content-end">
                                        <div className="number-input col col-lg-8">
                                            <input id={`${index}-subscription-licence`} onChange={updateNumberKeyPress} type="number" placeholder="0" className="validate col col-lg-8"/>
                                            <div className="number-input-button-area">
                                                <button data-index={`${index}`} onClick={updateNumber} className="plus-button"></button>
                                                <button data-index={`${index}`} onClick={updateNumber} className="minus-button"></button>
                                            </div>
                                        </div>
                                    </div>
                                    {subscriptionItem.items.length > 0 ?
                                        <div className="add-subscriptions-price col">{subscriptionItem.currency}<span
                                            id={`${index}-subscription-price`}
                                            data-price={subscriptionItem.items[0].price}>{subscriptionItem.items[0].price}</span>
                                            <br/> {subscriptionItem.unit}/{subscriptionItem.commitment}</div>
                                        :
                                        <div className="add-subscriptions-price col">{subscriptionItem.currency}<span
                                            id={`${index}-subscription-price`}
                                            data-price={subscriptionItem.unitPrice}>{subscriptionItem.unitPrice}</span>
                                            <br/> {subscriptionItem.unit}/{subscriptionItem.commitment}</div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center payment-part-popup  col col-lg-12">
                        <div className="col col-lg-12">
                            <p className="col col-lg-12">Your order will be payed with your card</p>
                            <p className="col col-lg-12"><strong>AMEX xxxx-4514</strong> <a href="" onClick={modifyPayment}>[Change]</a></p>
                        </div>
                        <div className="col col-lg-12">
                            <button>CONFIRM ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};