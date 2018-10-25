import React from 'react';
import { checkPartnerAction } from './actions';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import md5 from 'md5';

class AuthorizedRoute extends React.Component {
    componentWillMount() {
        this.props.checkPartner(this.getCookie('t89221'));
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

    render() {
        const { component: Component, isPartner, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {
                return isPartner
                    ? <Component {...this.props}/>
                    : <Redirect to='/' />
            }} />
        );
    }
}

const mapStateToProps = state => ({
    isPartner: state.auth.isPartner
});

const mapDispatchToProps = dispatch => ({
    checkPartner: (flag) => dispatch(checkPartnerAction(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);