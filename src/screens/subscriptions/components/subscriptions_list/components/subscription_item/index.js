import React from 'react';
import {connect} from 'react-redux';
import Button from './components/button';
import './index.css';

class SubscriptionItem extends React.Component {
    constructor(props) {
        super(props);
        /*this.props.Item= JSON.parse(this.props.subscriptionItem);*/
        /* this.props.Item= this.props.subscriptionItem);*/
        this.state = {isToggleOn: false};
        this.state.percentageOfUse = Math.round((this.props.subscriptionItem.usedLicenses / this.props.subscriptionItem.purchasedLicenses) * 100) + "%";
        this.state.percentageOfBilling = Math.round((this.props.subscriptionItem.purchasedLicenses / this.props.subscriptionItem.totalUsers) * 100) + "%";
        this.state.colorUse = Math.round((this.props.subscriptionItem.usedLicenses/ this.props.subscriptionItem.purchasedLicenses) * 100) > 80 ? "red" : "#51b6b5";
        this.state.colorBilling = Math.round((this.props.subscriptionItem.purchasedLicenses / this.props.subscriptionItem.totalUsers) * 100) > 100 ? "red" : "#51b6b5";
        this.state.status = this.props.subscriptionItem.vendorStatus === "eval" ? "#ff8411" : " #289728";
        this.state.expiryDate = new Date(this.props.subscriptionItem.expiryDate).getTime();
        this.state.nowDate = new Date().getTime();
        let delta = Math.abs(this.state.expiryDate - this.state.nowDate) / 1000;
        this.state.days = Math.floor(delta / 86400);

        if(this.props.subscriptionItem.vendorStatus === 'eval'){
            this.state.status = "#ff8411";
        }
        else if(this.props.subscriptionItem.vendorStatus === 'paid'){
            this.state.status = "#289728";
        }
        else{
            this.state.status = "#ea2812";
        }

        if(this.props.subscriptionItem.catalog.unit !== "pack"){
            this.state.totalPrice = this.props.subscriptionItem.purchasedLicenses * this.props.subscriptionItem.catalog.unitCost;
        }
        else{
            this.state.totalPrice = this.props.subscriptionItem.catalog.unitCost;
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        if(this.state.expiryDate <= this.state.nowDate){
            this.state.expired = "true";
        }else{
            this.state.expired = "false";
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const formatDate = (dateToFormat) => {
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateToFormat).toLocaleDateString('en-EN', options);
        };

        return (
            <div className="product-card whitebox nopad rounded">
                <div className="product-card-header">
                    <div className="row">
                        <div className="col col-lg-12 product-card-header-content">
                            <div className="product-logo row">
                                <div className="col col-lg-4 row">
                                    <div className="col picto-div col-lg-3">
                                        <p className="GscPicto">
                                            {this.props.subscriptionItem.product.name === 'G Suite' && <img src="https://www.econsulting.fr/sm/g-suite.png" alt="SubscriptionImage" />}
                                            {this.props.subscriptionItem.product.name === 'Google Vault' && <img src="https://www.econsulting.fr/sm/vault.png" alt="SubscriptionImage" />}
                                            {this.props.subscriptionItem.product.name === 'Google Drive' && <img src="https://www.econsulting.fr/sm/drive.png" alt="SubscriptionImage" />}
                                            {this.props.subscriptionItem.product.name === 'Shared Contacts for Gmail' && <img src="https://www.econsulting.fr/sm/shared-contact-for-gmail-pic.png" alt="SubscriptionImage" />}
                                            {this.props.subscriptionItem.product.name === 'Shared Contacts for G Suite' && <img src="https://www.econsulting.fr/sm/shared-contact-for-gmail-pic.png" alt="SubscriptionImage" />}
                                        </p>
                                    </div>
                                    <div className="col col-lg-7">
                                        <p className="Product">{this.props.subscriptionItem.product.name}</p>
                                        <p className="ProductVersion">{this.props.subscriptionItem.product.version.toUpperCase()}</p>
                                        <p className="domainname">{this.props.subscriptionItem.domain}</p>
                                        <div className="statut">
                                            <b className="cercle" style={{backgroundColor: this.state.status }}>&nbsp;</b>
                                            {this.props.subscriptionItem.vendorStatus === 'eval' && <span value="eval">Eval</span>}
                                            {this.props.subscriptionItem.vendorStatus === 'paid' && <span value="active">Active</span>}
                                            {this.props.subscriptionItem.vendorStatus === 'expired_eval'  && <span value="active">Evaluation Expired</span>}
                                            {this.props.subscriptionItem.vendorStatus === 'uninstalled_eval'  && <span value="active">Evaluation Expired</span>}
                                            {this.props.subscriptionItem.vendorStatus === 'expired_paid' && <span value="active">Expired</span>}
                                            {this.props.subscriptionItem.vendorStatus === 'uninstalled_paid'  && <span value="active">Expired</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-8 row">
                                    {this.props.subscriptionItem.vendorStatus === "paid" ?
                                        <div className="col col-lg-7 licences">
                                            <p className="uppercase">
                                                <p className="title">Licences:</p>
                                                <p className="percentagePart">
                                                    <div className="progress">
                                                        <div className="determinate" style={{width: this.state.percentageOfUse, backgroundColor: this.state.colorUse }}>&nbsp;</div>
                                                    </div>
                                                    <div>{this.props.subscriptionItem.usedLicenses} / {this.props.subscriptionItem.purchasedLicenses}</div>
                                                </p>
                                            </p>
                                            <p className="uppercase">
                                                <p className="title">Licences / Total users:</p>
                                                <p className="percentagePart">
                                                    <div className="progress">
                                                        <div className="determinate" style={{width: this.state.percentageOfBilling, backgroundColor: this.state.colorBilling }}>&nbsp;</div>
                                                    </div>
                                                    <div>{this.props.subscriptionItem.purchasedLicenses} / {this.props.subscriptionItem.totalUsers}</div>
                                                </p>
                                            </p>
                                        </div>
                                        :
                                        <div className="col col-lg-7 licences">
                                            &nbsp;
                                        </div>
                                    }

                                    <div className="col col-lg-2 licences">
                                        {this.props.subscriptionItem.vendorStatus === "paid" ?
                                            <p>TOTAL</p>
                                            :
                                            <p>&nbsp;</p>
                                        }
                                        <p className="price">
                                            {this.props.subscriptionItem.vendorStatus === "paid" ?
                                                <span
                                                    className="price-amount">{this.props.subscriptionItem.currency === 'USD' ? '$' : ''}{this.state.totalPrice}{this.props.subscriptionItem.currency !== 'USD' ? '€' : ''}</span>
                                                :
                                                <span
                                                    className="price-amount">{this.props.subscriptionItem.currency === 'USD' ? '$' : ''}{this.props.subscriptionItem.catalog.alternativePrice}{this.props.subscriptionItem.currency !== 'USD' ? '€' : ''}</span>
                                            }
                                            <br/>
                                        </p>
                                        {this.props.subscriptionItem.vendorStatus === "paid" ?
                                            <div className="frequencyHeader">
                                                PER {this.props.subscriptionItem.product.plan === 'annual yearly' ? 'YEAR' : 'MONTH'}
                                            </div>
                                            :
                                            <div className="frequencyHeader">
                                                PER {this.props.subscriptionItem.catalog.unit.toUpperCase()}/{this.props.subscriptionItem.alternateFrequency ? this.props.subscriptionItem.alternateFrequency === 'annual yearly' ? 'YEAR' : 'MONTH' : this.props.subscriptionItem.billingFrequency === 'annual yearly' ? 'YEAR' : 'MONTH'}
                                            </div>
                                        }
                                    </div>
                                    <div className=" col col-lg-3 actionSection">
                                        <div className="btn-wrapper col col-lg-12">
                                            <Button status={this.props.subscriptionItem.vendorStatus} renew={this.props.subscriptionItem.renewalOption} frequency={this.props.subscriptionItem.product.plan}/>
                                        </div>
                                        <div className="btn-wrapper col col-lg-12">
                                            <a href="http://staging-app.gmailsharedcontacts.com"><button className="launchButton uppercase">Launch</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-12 row">
                            <div className="col col-lg-6 addons"></div>
                            <div className="col col-lg-6 row">
                                <div className="col col-lg-4 push-l1"></div>
                                <div className="col col-lg-4 push-l1 promotions">{this.props.subscriptionItem.promotionBanner}</div>
                                <div className="col col-lg-3 push-l2"></div>
                            </div>
                        </div>
                    </div>
                    {this.props.subscriptionItem.vendorStatus === "paid" || this.props.subscriptionItem.vendorStatus === "selected" ?
                        <div onClick={this.handleClick} className="item-addons">
                            {this.state.isToggleOn ?
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                :
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            }
                        </div>
                        :
                        <div className="item-addons expireInfos">
                            {new Date(this.props.subscriptionItem.expiryDate).getTime() >=  new Date().getTime() ?
                                <span className="expireColor">Expires in {this.state.days} days</span>
                                :
                                <span>Expired since {new Date(this.props.subscriptionItem.expiryDate).toLocaleDateString()}</span>
                            }
                        </div>
                    }
                    <div className={"item-contract-details row " + (this.state.isToggleOn ? 'activeBottom' : '')} ref="itemContractDetails">
                        <div className="col col-lg-4">
                        <p><strong className="col col-lg-6">Unit cost</strong><span>{this.props.subscriptionItem.currency === 'USD' ? '$' : ""}{this.props.subscriptionItem.catalog.unitCost}{this.props.subscriptionItem.currency !== 'USD' ? '€' : ""}/{this.props.subscriptionItem.catalog.unit}/{this.props.subscriptionItem.billingFrequency === 'annual yearly' ? 'year' : 'month'}</span></p>
                        <p><strong className="col col-lg-6">Started on</strong><span>{formatDate(this.props.subscriptionItem.startPlanDate)}</span></p>
                        <p><strong className="col col-lg-6">{this.props.subscriptionItem.renewalOption === "cancel" ? "Commitment ends" : "Commitment renews"}</strong><span>{formatDate(this.props.subscriptionItem.expiryDate)}</span></p>
                        <p><strong className="col col-lg-6">Renewal Option</strong><span>{this.props.subscriptionItem.renewalOption === "cancel" ? "Cancel" : "Renew"}</span></p>
                        </div>
                        <div className="col col-lg-4">
                        <p><strong className="col col-lg-6">Payment method</strong>
                            {this.props.subscriptionItem.paymentMethod.type === 'credit card' && <span>Credit card ending with {this.props.subscriptionItem.paymentMethod.last4Digit}</span>}
                            {this.props.subscriptionItem.paymentMethod.type === 'paypal' && <span>Paypal account {this.props.subscriptionItem.paymentMethod.emailAddress}</span>}
                        </p>
                        <p><strong className="col col-lg-6">Billing every</strong><span>{this.props.subscriptionItem.product.plan === 'annual yearly' ? 'Year' : 'Month'}</span></p>
                        <p><strong className="col col-lg-6">Next invoice</strong><span>{formatDate(this.props.subscriptionItem.nextInvoice)}</span></p>
                        </div>
                        <div className="col col-lg-4">
                            <div id="accordion">
                                {this.props.subscriptionItem.childSubscriptions.map( (childSubscriptionsItem,index) => (
                                    <div className="card">
                                        <div className="card-header" id={"heading"+index}  data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapseOne"+index}>
                                            <div className="addons-left">
                                                <span>
                                                    <img src={childSubscriptionsItem.ChildImageUrl} alt="product-logo"/>
                                                </span>
                                                <span>
                                                    {childSubscriptionsItem.ChildType}
                                                </span>
                                            </div>
                                            <div className="addons-right">
                                                <span className="addon-licence">
                                                    {"Total Licences:  " + childSubscriptionsItem.ChildTotalLicence}
                                                </span>
                                                <span className="addon-price">
                                                    {"Total Price: "+ this.props.subscriptionItem.currency+ "" + childSubscriptionsItem.ChildTotalPrice}
                                                </span>
                                            </div>
                                        </div>
                                        <div id={"collapse"+index} className="collapse show" aria-labelledby={"heading"+index} data-parent="#accordion">
                                            {childSubscriptionsItem.ChildproductList.map( (product, index) => (
                                                <div  className="card-body">
                                                    <div className="addons-left">
                                                        <span>{product.version}</span>
                                                    </div>
                                                    <div className="addons-right">
                                                        <span className="addon-licence">{"Licences:  " +product.licencesNumber}</span>
                                                        <span  className="addon-price">{"Price:  " +this.props.subscriptionItem.currency +""+ product.price}</span>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card-body">
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        test : (number) => dispatch({ type: 'INCREMENT', payload: number }),
        test2 : (name) => dispatch({ type: 'SET_NAME', payload: name })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionItem);




