import React from 'react';
import './index.css';

export default class PricingItem extends React.Component {
    render() {
        return (
            <div key={this.props.index} className={`col col-lg-3 notpopular price-item`}>
                <form method="post">
                    <div className={"basic pricing-box white hoverable z-depth-1 " + (this.props.plan.mostPopular === true ? 'most-popular-plan' : null)}>
                        {this.props.plan.mostPopular === true ?
                            <div className="most-popular">
                                <img src="https://www.econsulting.fr/sm/heart.svg" alt="Like" height="12px" />
                                Most popular
                            </div>
                        :
                            null
                        }

                        <div className={`title price-item-${this.props.index}`}>
                            <div className="cost">
                                <sup>{this.props.plan.currency}</sup>{this.props.plan.amount}<sub>/{this.props.plan.unit}{this.props.plan.commitment}</sub>
                            </div>
                            <div className="feature">
                                <p className="slogtext">
                                    {this.props.plan.topMessage}
                                </p>
                            </div>
                            <div className="billing-circle cost-resume">
                                <p className="cost-resume-txt">
                                    {this.props.plan.billedMessage}
                                    <br/>
                                    {this.props.plan.totalYearMessage}
                                </p>
                            </div>
                            <div className="min-message">
                                {this.props.plan.optionnalMinMessage}
                            </div>
                        </div>
                        <div className="name">{this.props.plan.planName}</div>
                        <div className="features">
                            <ul>
                                {this.props.plan.planSpecificFeatures.map( (feature,index) => (
                                    <li key={index} className="additional">
                                        {feature}
                                    </li>
                                ))}
                                {this.props.plan.planFeatures.map( (feature,index) => (
                                    <li key={index}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="buy-button" >
                            <button className={`price-item-${this.props.index} btn `} type="submit" name="plan" value="ANNUAL_YEARLY">{this.props.plan.buttonName}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}