import React from 'react';
import Cancel from "./components/cancel";
import Renew from "./components/renew";
import Add from "./components/add";
import Promo from "./components/promo";
import Increase from "./components/increase_cap";
import './index.css';

export default class Popup extends React.Component {
    render() {
        return (
            <div id="popup">
                <div id="add" className="popupType"><Add /></div>
                <div id="cancel" className="popupType"><Cancel /></div>
                <div id="renew" className="popupType"><Renew /></div>
                <div id="increase" className="popupType"><Promo /></div>
                <div id="test" className="popupType"><Increase /></div>
                <div id="promo" className="popupType"><Promo /></div>
            </div>
        );
    }
};

export const displayPopup = (popupType) => {
    if(document.getElementById("popup").style.display === "block"){
        document.getElementById("popup").style.display = "none";
    }else
    {
        document.getElementById("popup").style.display = "block";
        let x = document.getElementsByClassName("popupType");
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        for(let i=0 ; i < document.querySelectorAll(".expandedButton").length; i++){
            document.querySelectorAll(".expandedButton")[i].className = "buttonSubOptions";
        }
        document.getElementById(`${popupType}`).style.display = "block";
    }
};

