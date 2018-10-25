import React from 'react';
import {displayPopup} from '../../../popup';
import './index.css';

export default class Cancel extends React.Component {
    render() {
        const handleClick = () => {
            displayPopup();
        };

        const confirm = () => {
            document.getElementById("cancel-first-step").style.display = "none";
            document.getElementById("cancel-second-step").style.display = "block";
        };

        return (
            <div className="cancel">
                <div id="cancel-first-step">
                    <div className="headerEntitlement">Cancel subscription <button className="closeButton" onClick={handleClick}>X</button></div>
                    <div>
                        <p>Are you sure that you want to cancel your subscription ?</p>
                        <div className="buttonArea">
                            <button onClick={handleClick}>Cancel</button>
                            <button onClick={confirm}>Confirm</button>
                        </div>
                    </div>
                </div>
                <div id="cancel-second-step">
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