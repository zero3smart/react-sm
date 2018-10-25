import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import InvoicesList from './components/invoices_list';
import './index.css';

export default class Invoices extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <InvoicesList />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}
