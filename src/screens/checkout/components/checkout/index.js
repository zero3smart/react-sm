import React from 'react';
import Select from 'react-select';
import * as user from '../../../../json/user.json';
import * as countries from '../../../../json/countries.json'
import * as checkout from '../../../../json/checkout.json'
import './index.css';
import CheckoutItem from "./components/checkout_item/index";

export default class CheckoutForm extends React.Component {
    state = {
        selectedOption: '',
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    displayPaymentPart = (event) => {
        if (event.target.id === "credit") {
            document.getElementById('credit').style.borderBottom = "3px solid #5EB7B6";
            document.getElementById('paypal').style.borderBottom = "1px solid #c4c4c4";
            document.getElementById('paypal').style.color = "#000";
            document.getElementsByClassName("paypal-part")[0].style.display =  "none";
            document.getElementsByClassName("credit-card-part")[0].style.display =  "block";
        }
        else {
            document.getElementById('paypal').style.borderBottom = "3px solid #5EB7B6";
            document.getElementById('credit').style.borderBottom = "1px solid #c4c4c4";
            document.getElementById('credit').style.color = "#000";
            document.getElementsByClassName("paypal-part")[0].style.display =  "block";
            document.getElementsByClassName("credit-card-part")[0].style.display =  "none";
        }
    };

    render() {
        let options = [];
        countries.countries.map( (country) => {
            options.push({value: country.code, label: country.name});
            return true;
        });

        return (
            <div className="content pt-2">
                <h1>Checkout</h1>
                <div className="d-flex">
                    <div className="whitebox-profile col col-lg-4">
                        <fieldset>
                            <div className="greybox">
                                <legend className="card-title">
                                    Billing contact
                                </legend>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label id="label_email">Email address</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_contact_email" name="contact_email" required="" type="email" placeholder={user.userInfo.email} />
                                    </div>
                                </div>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label id="label_name" className="disableable">Full name</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_name" name="name" required="" type="text" placeholder={user.userInfo.fullName} />
                                    </div>
                                </div>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label id="label_phone">Phone number</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_phone_number" name="phone_number" required="" type="text" placeholder={user.userInfo.phoneNumber} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="greybox nomarbot">
                                <legend className="card-title">
                                    Billing details
                                </legend>
                                <div className="row inline-form">
                                    <div id="country" className="col col-lg-2">
                                        <label>Country</label>
                                    </div>
                                    <div className="select-country">
                                        <Select
                                            name="form-field-name"
                                            value={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            options={options}
                                            optionClassName="select-options"
                                        />
                                    </div>
                                </div>
                                <div className="row inline-form">
                                    <div id="state" className="col col-lg-2">
                                        <label>State</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_state" name="state" required="" type="text" placeholder={user.userInfo.state} /></div>
                                </div>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label >City</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_city" name="city" required="" type="text" placeholder={user.userInfo.city} />
                                    </div>
                                </div>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label>Zip code</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change" id="id_zip_code" name="zip_code" required="" type="text" placeholder={user.userInfo.zipCode} />
                                    </div>
                                </div>
                                <div className="row inline-form">
                                    <div className="col col-lg-2">
                                        <label>Address</label>
                                    </div>
                                    <div className="col col-lg-10">
                                        <input data-parsley-trigger="change"  id="id_address" name="address" required="" type="text" placeholder={user.userInfo.adress} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                    <div className="col col-lg-8">
                        <div className="col col-lg-12 checkout-order">
                            <div className="row checkout-title">VOTRE COMMANDE</div>
                            <div className="row whitebox">
                                {checkout.checkout.map((item, index) => (
                                    <CheckoutItem checkoutItem={item} />
                                ))}
                                <div className="col-lg-12 promo-part">
                                    <p className="col-lg-4 promo-button"><a href="">Entrez le code promotionnel</a></p>
                                </div>
                                <div className="col-lg-12 total-cost-part">
                                   <div className="total-cost">COÛT TOTAL {checkout.currency}{checkout.globalAmount} FOR ONE {checkout.commitment}</div>
                                </div>
                                <div className="col-lg-12 payment-part">
                                    <div>
                                        <p className="payment-title whitebox">SELECTIONNEZ VOTRE MODE DE PAIEMENT</p>
                                        <div className="row col-lg-12 payment-tab">
                                            <p className="col-lg-6" id="credit" onClick={this.displayPaymentPart}>CARTE DE CREDIT</p>
                                            <p className="col-lg-6" id="paypal" onClick={this.displayPaymentPart}>PAYPAL</p>
                                        </div>
                                        <div className="credit-card-part">
                                            <p>Veuillez, s'il vous plaît, entrer les informations de votre carte de crédit</p>
                                            <div className="col-lg-12">
                                                <div className="row justify-content-lg-center">
                                                    <div className="col-lg-3 payment-label">NUMERO DE CARTE</div>
                                                    <input className="col-lg-6" />
                                                </div>
                                                <div className="row justify-content-lg-center">
                                                    <div className="col-lg-3 payment-label">DATE D'EXPIRATION <span>(MM/YYYY)</span></div>
                                                    <input className="col-lg-6" />
                                                </div>
                                                <div className="row justify-content-lg-center">
                                                    <div className="col-lg-3 payment-label">CVV</div>
                                                    <input className="col-lg-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="paypal-part">
                                            <p>Cliquer sur "Passer au paiement" pour payer avec votre compte Paypal</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 whitebox validation">
                                        <p>OUI, J'AI LU ET ACCEPTE LES <span>CONDITIONS GENERALES D'UTILISATION</span> DE SHARED CONTACTS FOR GMAIL <input type="checkbox"/></p>
                                    </div>
                                    <div className="col-lg-12 validation-button">
                                        <button>PASSER AU PAIEMENT</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
