import React from 'react';
import {displayPopup} from '../../../../../../../../../src/components/popup';
import './index.css';

export default class Button extends React.Component {
    constructor(props){
        super(props);
        this.showActions = this.showActions.bind(this);
    }

    showActions = (event) =>{
        console.log(event);
        console.log(event.target);
        if(event.target.nextSibling.className === "buttonSubOptions"){
            for(let i=0 ; i < document.querySelectorAll(".expandedButton").length; i++){
                document.querySelectorAll(".expandedButton")[i].className = "buttonSubOptions";
            }
            event.target.nextSibling.className = "buttonSubOptions expandedButton";
        }
        else{
            event.target.nextSibling.className = "buttonSubOptions";
            for(let i=0 ; i < document.querySelectorAll(".expandedButton").length; i++){
                document.querySelectorAll(".expandedButton")[i].className = "buttonSubOptions";
            }
        }
    };

    render() {
        return (
            <div>
                {this.props.status === "EVAL" ?
                    <button id="buyBtn" className="activeAction uppercase"><a href="./price">BUY</a></button>
                :
                    <div className="buttonSelector">
                        {this.props.frequency === "ANNUAL_YEARLY" ?
                            <div id="buyBtn" className="activeAction uppercase"><span onClick={() => displayPopup("add")}>ADD LICENCES</span>
                                <div onClick={this.showActions} className="buttonClick">
                                    <i  className="material-icons" >arrow_drop_down</i>
                                    <div className="buttonSubOptions">
                                        <ul>
                                            <li><a href="./price/upgrade">Upgrade</a></li>
                                            {this.props.renew === "Cancel" ?
                                                <li key="1"><a onClick={() => displayPopup("cancel")}>Cancel</a></li>
                                                :
                                                <li key="2"><a onClick={() => displayPopup("renew")}>Renew</a></li>
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            :
                            <div id="buyBtn" className="activeAction uppercase"><span onClick={() => displayPopup("increase")} >INCREASE CAP</span>
                                <div onClick={this.showActions} className="buttonClick">
                                    <i  className="material-icons">arrow_drop_down</i>
                                    <div className="buttonSubOptions">
                                        <ul>
                                            <li><a href="./price/upgrade">Upgrade</a></li>
                                            {this.props.renew === "Cancel" ?
                                                <li key="1"><a onClick={() => displayPopup("cancel")}>Cancel</a></li>
                                                :
                                                <li key="2"><a onClick={() => displayPopup("renew")}>Renew</a></li>
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}







