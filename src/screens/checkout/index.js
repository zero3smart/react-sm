import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import CheckoutForm from './components/checkout/';
import './index.css';

export default class Checkout extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central pt-2">
                    <CheckoutForm />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}
