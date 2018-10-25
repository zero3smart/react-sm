import React from 'react';
import * as plans from '../../../../json/plans.json'
import * as plansMonthly from '../../../../json/plansmonth.json'
import './index.css';
import PricingItem from "./components/pricing-item/index";

export default class Pricing extends React.Component {
    render() {

        const selectPlan = (event) => {
            document.getElementsByClassName("active")[0].className = "uppercase shadow1";
            event.target.className = "uppercase active";
            if(event.target.getAttribute('value') === "year"){
                document.getElementById("yearly_pricing").style.display = "flex";
                document.getElementById("monthly_pricing").style.display = "none";
            }
            else{
                document.getElementById("yearly_pricing").style.display = "none";
                document.getElementById("monthly_pricing").style.display = "flex";
            }
        };

        return (
            <div className="content pt-2">
                <div className="frequency text-center">
                    <ul>
                        <li className="active uppercase" onClick={selectPlan} value="year">Yearly commitment</li>
                        <li className="uppercase shadow1" onClick={selectPlan} value="month">Monthly commitment</li>
                    </ul>
                </div>
                <div className="row" id="yearly_pricing">
                    {plans.plans.map( (plan,index) => (
                        <PricingItem plan={plan} index={index} key={index} />
                    ))}
                </div>
                <div className="row" id="monthly_pricing">
                    {plansMonthly.plans.map( (plan,index) => (
                        <PricingItem plan={plan} index={index} key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}