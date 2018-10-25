import React from 'react';
import {displayPopup} from '../../../popup';
import './index.css';

export default class Renew extends React.Component {

    render() {
        const handleClick = () => {
            displayPopup();
        };
        
        const confirm = () => {
            document.getElementById("renew-first-step").style.display = "none";
            document.getElementById("renew-second-step").style.display = "block";
        };

        return (
            <div className="renew">
                <div id="renew-first-step">
                    <div className="headerEntitlement">Renew subscription <button className="closeButton" onClick={handleClick}>X</button></div>
                    <div>
                        <p>Are you sure that you want to renew your subscription ?</p>
                        <div className="buttonArea">
                            <button onClick={handleClick}>Cancel</button>
                            <button onClick={confirm}>Confirm</button>
                        </div>
                    </div>
                </div>
                <div id="renew-second-step">
                    <div className="headerEntitlement">Change applied to your subscription <button className="closeButton" onClick={handleClick}>X</button></div>
                    <div>
                        <p>Your request has been taken into accounts.<br/>You will be contacted by our Support team service</p>
                        <div className="buttonArea">
                            <button onClick={handleClick}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};