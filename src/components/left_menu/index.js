import React from 'react';
import {NavLink}  from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { checkPartnerAction } from '../../actions';
import md5 from 'md5';
import './index.css';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    getCookie(name) {
        let cookie = document.cookie.split(';');
        let status = cookie.find(e => e.indexOf(name) !== -1);
        if (status !== undefined) {
            let hash = status.split('=')[1];
            if (md5('partners') == hash) {
                return true;
            }
        }

        return false;
    }

    componentWillMount() {
        this.props.checkPartner(this.getCookie('t89221'));
    }

    componentDidMount() {
        // axios.get(
        //     process.env.REACT_APP_PUBLIC_URL + '/api/profile',
        //     {},
        //     {
        //         headers: {
        //             "authorization": this.getCookie("csrftoken"),
        //             "Content-Type": "application/json",
        //             "X-CSRFToken": this.getCookie("csrftoken")
        //         },
        //         auth: {
        //             "csrftoken": this.getCookie("csrftoken")
        //         }
        //     }).then(response => {
        //         console.log(response);
        //         if (response) {
        //             this.setState({
        //                 currentUser: response.data
        //             });
        //         }
        //     }
        // );
    }

    render() {
        const user = "ue";
        const baseUrl = process.env.REACT_APP_PUBLIC_URL;

        return (
            <div>
                <div className="left-menu">
                    <nav>
                        <ul>
                            <li>
                                <img src="https://www.econsulting.fr/sm/gae-logo.png" alt="gsc-logo" />
                            </li>
                            <li>
                                <a href="https://app.gmailsharedcontacts.com/">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-share-contacts.png') } alt="share-picto" /></span>
                                    </div>
                                    <span className="uppercase">Shared contacts</span>
                                </a>
                            </li>
                            <li className={`${this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/react51`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={require('../../img/menu-share-contacts.png')} alt="share-picto" /></span>
                                    </div>
                                    <span className="uppercase">Home</span>
                                </NavLink>
                            </li>
                            <li className={`${!this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={baseUrl} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-subscription.png') } alt="subscription-picto" /></span>
                                    </div>
                                    <span className="uppercase">Subscriptions</span>
                                </NavLink>
                            </li>
                            <li className={`${!this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/price`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        {user === "ue" ?
                                            <span className="picto"><img src={ require('../../img/euro.png') } alt="price-picto" /></span>
                                        :
                                            <span className="picto"><img src={ require('../../img/menu-pricing.png') } alt="price-picto" /></span>
                                        }
                                    </div>
                                    <span className="uppercase">Price</span>
                                </NavLink>
                            </li>
                            <li className={`${!this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/invoices`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-invoice.png') } alt="invoices-picto" /></span>
                                    </div>
                                    <span className="uppercase">Invoices</span>
                                </NavLink>
                            </li>
                            <li className={`${this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/profile`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-profile.png') } alt="profile-picto" /></span>
                                    </div>
                                    <span className="uppercase">Profile</span>
                                </NavLink>
                            </li>
                            <li className={`${this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/payment-informations`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-payment-information.png') } alt="payment-picto" /></span>
                                    </div>
                                    <span className="uppercase">Payment informations</span>
                                </NavLink>
                            </li>
                            <li className={`${!this.props.isPartner ? '' : 'd-none'}`}>
                                <NavLink to={`/promotion`} activeClassName="activeNav">
                                    <div className="picto-wrapper">
                                        <span className="picto"><img src={ require('../../img/menu-payment-information.png') } alt="payment-picto" /></span>
                                    </div>
                                    <span className="uppercase">Promotions</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isPartner: state.auth.isPartner
});

const mapDispatchToProps = dispatch => ({
    checkPartner: (flag) => dispatch(checkPartnerAction(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);