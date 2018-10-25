import React from 'react';
import Assistance from './components/assistance/index';
import SubscriptionItem from './components/subscription_item/index';
import subscriptions from './../../../../json/subscriptions.json';
import axios from 'axios';
import './index.css';

export default class SubscriptionsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /*subscriptionsList: null*/
            subscriptionsList: subscriptions
        }
    }

    componentDidMount() {
        /* UNCOMMENT FOR DJANGO*/
        /*function getCookie(name) { let value = "; " + document.cookie; let parts = value.split("; " + name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); }
        axios.get(window.location.origin + '/api/subscriptions/?layout=encapsulate',{}, { headers: { "authorization": getCookie("csrftoken"),"Content-Type": "application/json", "X-CSRFToken": getCookie("csrftoken") }, auth: {"csrftoken": getCookie("csrftoken")}}).then(response => {
            if(response) {
                this.setState({
                    subscriptionsList: response.data.results
                });
            }
        });*/
    }

    render() {
        if (this.state.subscriptionsList) {
            return (
                <div className="content  pt-2">
                    <h1>My subscriptions</h1>
                    {this.state.subscriptionsList.items.map( (subscriptionItem,index) => (
                        /*<SubscriptionItem key={index} subscriptionItem={JSON.stringify(subscriptionItem)} />*/
                        <SubscriptionItem key={index} subscriptionItem={subscriptionItem} />
                    ))}
                    { this.state.subscriptionsList.items.length === 0 ?
                        <div className="product-card whitebox nopad rounded">
                            <div className="product-card-header">
                                <div className="row">
                                    <div className="col col-lg-12 product-card-header-content">
                                        <div className="product-logo row">
                                            <div className="col col-lg-7 row">
                                                <div className="col picto-div col-lg-2">
                                                    <p className="GscPicto">
                                                        <img src="https://www.econsulting.fr/sm/shared-contact-for-gmail-pic.png" alt="SubscriptionImage" />
                                                    </p>
                                                </div>
                                                <div className="col col-lg-7">
                                                    <p className="Product">Gmail Shared Contacts for Gmail &reg;</p>
                                                    <p className="ProductVersion">Don't have tested  GSC yet ? Give it a try and join us now</p>
                                                </div>
                                            </div>
                                            <div className="col col-lg-5 row try-blue">
                                                <div className="triangle"></div>
                                                <a href="#" className="try-link">TRY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                    null
                    }
                    <Assistance />
                </div>
            );
        }
        else {
            return (
                <div className="lds-dual-ring">Loading</div>
            )
        }

    }
}
