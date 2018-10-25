import React from 'react';
import LeftMenu from '../../components/left_menu/';
import Popup from '../../components/popup/';
import Footer from '../../components/footer/';
import SubscriptionsList from './components/subscriptions_list/';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import appTranslations from "../../json/translations/global.json";
import LanguageToggle from "../../components/translations/LanguageToggle";
import './index.css';

export class Subscription extends React.Component {
    constructor(props){
        super(props);
        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "French", code: "fr" }
            ],
            translations : appTranslations,
            options: { renderToStaticMarkup }
        });
        this.props.addTranslation(appTranslations);
    }

    render() {
        return (
            <div className="main">
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="app-central">
                    <SubscriptionsList />
                </div>
                <div className="footer-part">
                    <Footer />
                </div>
                <Popup />
            </div>
        );
    }
}

export default withLocalize(Subscription);