import React from 'react';
import {displayPopup} from '../../../popup';
import './index.css';

export default class Promo extends React.Component {
    render() {
        const handleClick = () => {
            displayPopup();
        };

        const handleAccordion = (event) => {
            if(document.getElementsByClassName("collapsed")){
                document.getElementsByClassName("collapsed")[0].className = "collapse";
            }
            document.getElementsByClassName("fa fa-chevron-up")[0].className = "fa fa-chevron-down";
            event.target.nextSibling.className = "collapsed";
        };

        return (
            <div className="promo">
                <div>
                    <div className="headerEntitlement">SPECIAL OFFER: BUNDLE WITH G SUITE<button className="closeButton" onClick={handleClick}>X</button></div>
                    <div className="content-promo-div">
                        <p>Unify your G Suite and your Shared Contacts for Gmail invoice and get 50% discount on your new subscription.</p>
                        <div className="product-list">
                            <div className="product">
                                <div>
                                    <p className="title-product">SHARED CONTACTS FOR GMAIL</p>
                                    <div className="product-content">
                                        <p>PROFESSIONAL EDITION</p>
                                        <p className="promo-price">6$<span className="normal-price">$12</span></p>
                                        <p className="promo-unity">user/year</p>
                                    </div>
                                </div>
                                <p className="promo-message">50% Savings!</p>
                            </div>
                            <i className="large material-icons">add_circle</i>
                            <div className="product">
                                <div>
                                    <p className="title-product">G SUITE</p>
                                    <div className="logo-product product-content">
                                        <img src={require("../../../../img/g-suite.png")} alt="logo"/>
                                    </div>
                                </div>
                                <p className="promo-message">Same as now</p>
                            </div>
                        </div>
                        <h2>HOW DOES IT WORKS?</h2>
                        <iframe title="video-promo" width="100%" height="80%" src="https://www.youtube.com/embed/I5-0M3RJMYg?feature=oembed&amp;wmode=opaque" frameBorder="0" allowFullScreen=""></iframe>
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne" onClick={handleAccordion}>
                                    Will the switch be seemless for my users? <i className="fa fa-chevron-up" aria-hidden="true" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>
                                </div>
                                <div id="collapseOne" className="collapsed" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo" onClick={handleAccordion}>
                                    Will be there a fine? <i className="fa fa-chevron-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></i>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree" onClick={handleAccordion}>
                                    Don't i have a commitment with G Suite? <i className="fa fa-chevron-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"></i>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour" onClick={handleAccordion}>
                                    Will i be charged double? <i className="fa fa-chevron-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"></i>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonArea">
                        <button>I am interested</button>
                        <button onClick={handleClick}>No thanks, I want to pay the regular price</button>
                    </div>
                </div>
            </div>
        );
    }
};