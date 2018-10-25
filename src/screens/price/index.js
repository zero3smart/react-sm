import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import Pricing from './components/pricing';
import './index.css';

export default class Price extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <Pricing />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}



