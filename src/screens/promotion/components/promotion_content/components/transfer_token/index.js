import React from 'react';
import axios from 'axios';
import './index.css';

export default class TransferToken extends React.Component {
    render() {

        const transferStep1 = () => {
            let transferToken = document.getElementById('token-input').value;
            function getCookie(name) { let value = "; " + document.cookie; let parts = value.split("; " + name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); }
            /* URL FOR LIST */
                axios.post(window.location.origin + '/api/check-vendor-token/', {
                    "transferToken" : transferToken,
                    "order" : "UPDATE"
                }, { headers: { "authorization": getCookie("csrftoken"),"Content-Type": "application/json", "X-CSRFToken": getCookie("csrftoken") }, auth: {"csrftoken": getCookie("csrftoken")}}).then(response => {
                    /* TRANSFER ANIMATION*/
                    if(response.data.eligible === true){
                        document.getElementById('check-eligibility-part').style.display = "none";
                        document.getElementById('eligible-part').style.display = "block";
                    }
                    else{
                        document.getElementById('check-eligibility-part').style.display = "none";
                        document.getElementById('not-eligible-part').style.display = "block";
                    }
                });


        };

        const termsAndConditions = () => {
            console.log("terms and condition");
        };

        const checkHandle = (event) => {
            const target = event.target;
            const value = target.checked;
            if(value === true){
               document.getElementById("link-domain").disabled = false;
               document.getElementById("link-domain").style.opacity = 1;
               document.getElementById("link-domain").onclick = linkDomain;

            }
            else{
                document.getElementById("link-domain").style.opacity = 0.5;
                document.getElementById("link-domain").disabled = true;
            }
        };

        const linkDomain = () => {
            document.getElementById('eligible-part').style.display = "none";
            document.getElementById('validated-part').style.display = "block";
        };

        return (
            <div className="row check-eligibility-content">
                <div className="col col lg-12" id="check-eligibility-part">
                    <h2>CHECK YOUR ELIGIBILITY</h2>
                    <div className="token-area">
                        <p>ENTER YOUR TOKEN</p>
                        <input type="text" id="token-input"/>
                        <button onClick={transferStep1}>GO!</button>
                        <div className="tooltip"><i className="material-icons">help_outline</i><span className="tooltiptext  tooltip-right">Explication</span></div>
                    </div>
                </div>
                <div className="col col lg-12" id="eligible-part">
                    <h2>YOUR ARE ELIGIBLE!</h2>
                    <div className="token-area">
                        <p className="congrats-message">Congratulations! You are eligible for linking your domain and receive <strong>3 month FREE</strong> of <strong>Shared Contacts for Gmail.</strong></p>
                        <div>
                            <input id="terms-checkbox" type="checkbox" onChange={checkHandle} />
                            <p>I accept <a onClick={termsAndConditions} className="terms-conditions">terms and conditions.</a> <button id="link-domain" disabled>LINK YOUR DOMAIN</button></p>
                        </div>
                    </div>
                </div>
                <div className="col col lg-12" id="not-eligible-part">
                    <h2>YOUR ARE NOT ELIGIBLE!</h2>
                    <div className="token-area">
                        <p>Sorry ! Your are not eligible</p>
                    </div>
                </div>
                <div className="col col lg-12" id="validated-part">
                    <div className="token-area">
                        <img src={require("../../../../../../img/validate.png")}  alt="gsc-picto"/>
                        <h3>Your subscription has succesfully been linked to Gapps Experts Inc !</h3>
                        <p className="congrats-message">Google will bill you from <span>Oct 1, 2017</span> to <span>Oct 5, 2017</span>. Then, Gapps Experts Inc, will charge you from <span>Oct 6, 2017</span> to <span>Oct 31, 2017</span></p>
                        <a href="./subscriptions"><i className="material-icons">keyboard_backspace</i> Go back to your subscriptions</a>
                    </div>
                </div>
            </div>
        );
    }
}
