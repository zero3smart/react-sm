import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <div className="payment-container">
                        <div style={{ 'width': '120px' }}>
                            <FontAwesomeIcon icon={faUserCircle} style={{ 'font-size': '100px' }}/>
                            <span>Profile</span>
                        </div>
                        <div style={{ 'width': '120px' }}>
                            <FontAwesomeIcon icon={faCreditCard} style={{ 'font-size': '100px' }}/>
                            <span>Payment Information</span>
                        </div>
                    </div>
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}
