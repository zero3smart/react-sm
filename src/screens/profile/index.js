import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Footer from '../../components/footer/';
import ProfileForm from './components/profile_form';
import './index.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <ProfileForm />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
            </div>
        );
    }
}
