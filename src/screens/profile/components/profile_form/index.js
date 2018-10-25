import React from 'react';
import Select from 'react-select';
import * as user from '../../../../json/user.json';
import * as countries from '../../../../json/countries.json'
import './index.css';

export default class ProfileForm extends React.Component {
    state = {
        selectedOption: '',
        user : {
            'email' : user.userInfo.email,
            'name' : user.userInfo.fullName,
            'phone' : user.userInfo.phoneNumber,
            'state' : user.userInfo.state,
            'city' : user.userInfo.city,
            'zip' : user.userInfo.zipCode,
            'address' : user.userInfo.adress
        },
        inputChanged : [false, false, false, false, false, false]
    };

    handleChange = (selectedOption) => {
        this.setState( selectedOption );
    };

    displayUpdateBtn = (event) => {
        let inputArray = [
            this.state.user.email,
            this.state.user.name,
            this.state.user.phone,
            this.state.user.state,
            this.state.user.city,
            this.state.user.zip,
            this.state.user.address
        ];

        if(event.target.value !== inputArray[event.target.dataset.key]){
            this.state.inputChanged[event.target.dataset.key] = true;
        } else {
            this.state.inputChanged[event.target.dataset.key] = false;
        }

        console.log(this.state.inputChanged);
        console.log(this.state.inputChanged.indexOf(true));

        if(this.state.inputChanged.indexOf(true) !== -1 ) {
            document.querySelector("#BDCswitch").className = "modif btn";
        }
        else {
            document.querySelector("#BDCswitch").className = "modif btn disabled";
        }
    };

    render() {
        /*const selectedOption = this.state;*/
        let options = [];
        countries.countries.map( (country, index) => {
            options.push({key: index, value: country.code, label: country.name})
            return true
        });

        return (
            <div className="content pt-2">
                <h1>Profile</h1>
                <div className="whitebox-profile">
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
                                    <input data-key="0" onChange={this.displayUpdateBtn} data-parsley-trigger="change" id="id_contact_email" name="contact_email" required="" type="email" placeholder={this.state.user.email}/>
                                </div>
                            </div>
                            <div className="row inline-form">
                                <div className="col col-lg-2">
                                    <label id="label_name" className="disableable">Full name</label>
                                </div>
                                <div className="col col-lg-10">
                                    <input data-key="1" onChange={this.displayUpdateBtn} data-parsley-trigger="change" id="id_name" name="name" required="" type="text" placeholder={this.state.user.name} />
                                </div>
                            </div>
                            <div className="row inline-form">
                                <div className="col col-lg-2">
                                    <label id="label_phone">Phone number</label>
                                </div>
                                <div className="col col-lg-10">
                                    <input data-key="2" onChange={this.displayUpdateBtn} data-parsley-trigger="change" id="id_phone_number" name="phone_number" required="" type="text" placeholder={this.state.user.phone} />
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
                                    <input onChange={this.displayUpdateBtn} data-key="3" data-parsley-trigger="change" id="id_state" name="state" required="" type="text" placeholder={this.state.user.state} /></div>
                            </div>
                            <div className="row inline-form">
                                <div className="col col-lg-2">
                                    <label >City</label>
                                </div>
                                <div className="col col-lg-10">
                                    <input onChange={this.displayUpdateBtn} data-key="4" data-parsley-trigger="change" id="id_city" name="city" required="" type="text" placeholder={this.state.user.city} />
                                </div>
                            </div>
                            <div className="row inline-form">
                                <div className="col col-lg-2">
                                    <label>Zip code</label>
                                </div>
                                <div className="col col-lg-10">
                                    <input onChange={this.displayUpdateBtn} data-key="5" data-parsley-trigger="change" id="id_zip_code" name="zip_code" required="" type="text" placeholder={this.state.user.zip} />
                                </div>
                            </div>
                            <div className="row inline-form">
                                <div className="col col-lg-2">
                                    <label>Address</label>
                                </div>
                                <div className="col col-lg-10">
                                    <input onChange={this.displayUpdateBtn} data-key="" data-parsley-trigger="change"  id="id_address" name="address" required="" type="text" placeholder={this.state.user.address} />
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </div>
                <div className="right">
                    <button type="submit" id="BDCswitch" className={"modif btn disabled"}>Update</button>
                </div>
            </div>
        );
    }
}
