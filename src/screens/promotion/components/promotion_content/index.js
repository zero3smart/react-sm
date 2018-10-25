import React from 'react';
import TransferToken from './components/transfer_token';
import './index.css';

export default class PromotionContent extends React.Component {
    render() {
        const handleAccordion = (event) => {
            document.getElementsByClassName("collapsed")[0].className = "collapse";
            event.target.nextSibling.className = "collapsed";
        };

        return (
            <div className="content pt-2">
                <h1><img src={require("../../../../img/google_link.png")} className="promo-picto" alt="google-promo-link-picto" /> LINK YOUR GOOGLE ACCOUNT</h1>
                <div className="row">
                    <div className="col mx-4 mt-2">
                        <div className="row headerEntitlement">ADVANTAGES</div>
                        <div className="row advantages">
                            <ul className="col col-lg-8 advantages-ul">
                                <li><span>+3 Months FREE</span> on Shared Contacts for Gmail</li>
                                <li>All your invoices on  the same place</li>
                                <li>Unique payment method</li>
                                <li>Unique individual Support for all your apps</li>
                                <li>No surcharge</li>
                            </ul>
                            <div className="col col-lg-4 promo-picture-part">
                                <img className="col col-lg-9" src={require("../../../../img/shared.png")}  alt="gsc-picto"/>
                                <img className="col col-lg-7 three-month-free-picture" src={require("../../../../img/3_month_free.png")} alt="3-month-free-promo" />
                            </div>
                        </div>
                    </div>
                    <div className="col mr-4 mt-2">
                        <div className="row headerEntitlement">FAQ</div>
                        <div id="accordion2" role="tablist" aria-multiselectable="true" className="row">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne" onClick={handleAccordion}>First Question</div>
                                <div id="collapseOne1" className="collapsed show" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="card-block p-3">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="headingTwo" onClick={handleAccordion}>Second Question</div>
                                <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="card-block p-3">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="headingThree" onClick={handleAccordion}>Third Question</div>
                                <div id="collapseThree1" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="card-block p-3">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="how-it-works-part mx-4">
                    <div className="row headerEntitlement">HOW DOES IT WORKS</div>
                    <div className="row how-it-works-content justify-content-center ">
                        <ul className="d-flex justify-content-center py-3">
                            <div className="mx-5">
                                <li><span>1.</span> Enter your transfer Token <a href="">How to get it?</a></li>
                                <li><span>2.</span> Click on Go to check your eligibility</li>
                                <li><span>3.</span> Link your G Suite account</li>
                            </div>
                            <div className="mx-5">
                                <li><span>4.</span> Google stops billing you</li>
                                <li><span>5.</span> You are billed by Gapps Experts Inc.</li>
                                <li><span>6.</span> Start enjoying <strong>3 Month free</strong> of Shared Contacts for Gmail</li>
                            </div>
                        </ul>
                    </div>
                    <TransferToken />
                </div>
                <p className="promotion-signature">Legale &ndash; Gapps Experts Inc. is Google Premium Partner and authorized reseller <img className="logo-cloud" src={require("../../../../img/google-cloud.png")} alt="google-cloud-picto"/></p>
            </div>
        );
    }
}
