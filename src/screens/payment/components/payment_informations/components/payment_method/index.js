import React from 'react';
import './index.css';

export default class PaymentMethod extends React.Component {
    render() {
        return (
            <div id="card">
                <div className="ccard">
                    <div className="card-panel">
                        <p className="card-title">Credit card</p>
                        <div className="row">
                            <div className="col col-lg-8">
                                <p className="data number">American Express **** 1024</p>
                            </div>
                            <div className="col col-lg-4 validityDate">
                                <p className="label">Valid until</p>
                                <p className="data">05/2019</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12 footer">
                                <p className="card-state valid">
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Valid
                                </p>
                                <button className="changeCard">Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
