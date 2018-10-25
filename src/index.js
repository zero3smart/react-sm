import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Subscription from './screens/subscriptions';
import Price from './screens/price';
import PriceMarket from './screens/price_market';
import Invoices from './screens/invoices';
import Home from './screens/Home';
import AuthorizedRoute from './AuthorizedRoute';
import InvoicePdf from './screens/invoices/components/invoices_list/components/invoice_item/components/invoice_pdf';
import { LocalizeProvider } from "react-localize-redux";
import Profile from './screens/profile';
import PaymentInformation from './screens/payment';
import Checkout from './screens/checkout';
import { BrowserRouter } from 'react-router-dom';
import Promotion from "./screens/promotion/index";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class GmailSharedContactAPI extends React.Component {
    render() {
        const baseUrl = process.env.REACT_APP_PUBLIC_URL;

        return (
            <div className="main">
                <Switch>
                    <Route exact path={'/'} component={Subscription}/>
                    <Route exact path={'/price'} component={PriceMarket}/>
                    <Route exact path={'/price/:subscription'} component={Price}/>
                    <Route exact path={'/price/upgrade'} component={Price}/>
                    <Route exact path={'/invoices'} component={Invoices}/>
                    <Route exact path={'/invoices/:invoiceId'} component={InvoicePdf}/>
                    <Route exact path={'/profile'} component={Profile}/>
                    <Route exact path={'/payment-informations'} component={PaymentInformation}/>
                    <Route exact path={'/promotion'} component={Promotion}/>
                    <Route exact path={'/checkout'} component={Checkout}/>
                    <AuthorizedRoute path={'/react51'} component={Home}/>
                    <Redirect to={'/'} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider>
            <BrowserRouter>
                <GmailSharedContactAPI />
            </BrowserRouter>
        </LocalizeProvider>
    </Provider>,
    document.getElementById('main')
);