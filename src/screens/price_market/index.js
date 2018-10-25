import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import Market from './components/market';
import './index.css';

export default class PriceMarket extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <Market />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}



