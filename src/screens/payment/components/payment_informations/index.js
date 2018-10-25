import React from 'react';
import PaymentMethod from './components/payment_method';
import './index.css';

export default class PaymentInformations extends React.Component {
    render() {
        return (
            <div className="content pt-2">
                <h1>MY PAYMENT INFORMATION</h1>
                <p className="add-payment">
                    <a className="btn-floating btn-large waves-effect waves-light teal lighten-2 popup-trigger">
                        <i className="material-icons">add</i>
                    </a>
                    <a href="" className="popup-trigger add-payment-link"> Add a payment method</a>
                </p>
                <PaymentMethod />
            </div>
        );
    }
}
