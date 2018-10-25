import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import PaymentInformations from './components/payment_informations/index';
import './index.css';

export default class PaymentInformation extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <PaymentInformations />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}
