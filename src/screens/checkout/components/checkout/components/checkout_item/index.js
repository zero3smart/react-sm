import React from 'react';
import './index.css';

export default class CheckoutItem extends React.Component {
    render() {
        return (
            <div className="whitebox checkoutItem">
                <div className="col-lg-12 row checkoutItemHeader">
                    <img src={this.props.checkoutItem.image} alt="" className="col-lg-1"/>
                    <div className="col-lg-5">
                        <h4>{this.props.checkoutItem.name}</h4>
                        <p className="version">{this.props.checkoutItem.version}</p>
                    </div>
                </div>
                <div className="col-lg-12 checkoutItemBody">
                    <div className="row">
                        <div className="col-lg-5">
                            <p className="row">
                                <span className="label col-lg-6">NOM DE DOMAINE</span>
                                <span className="col-lg-2 value-body">{this.props.checkoutItem.domain}</span>
                            </p>
                            <p className="row">
                                <span className="label col-lg-6">PLAN</span>
                                <span className="col-lg-2 value-body">{this.props.checkoutItem.plan}</span>
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <p className="row">
                                <span className="label col-lg-5">DATE D'EXPIRATION</span>
                                <span className="col-lg-5 value-body">{this.props.checkoutItem.expiration}</span>
                            </p>
                            <p className="row">
                                <span className="label col-lg-5">COÛT UNITAIRE</span>
                                <span className="col-lg-5 value-body">{this.props.checkoutItem.currency}{this.props.checkoutItem.totalAmount}/{this.props.checkoutItem.unit}/{this.props.checkoutItem.commitment}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
