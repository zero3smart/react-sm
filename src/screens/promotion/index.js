import React from 'react';
import LeftMenu from '../../components/left_menu/';
import PromotionContent from './components/promotion_content';
import Footer from '../../components/footer/';
import './index.css';

export class Promotion extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <PromotionContent />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Promotion;
