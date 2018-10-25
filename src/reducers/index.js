import {combineReducers} from 'redux';
import userReducer from './reducersItems/userReducer';
import subscriptionReducer from './reducersItems/subscriptionReducer';
import authReducer from './reducersItems/authReducer';

const reducers = combineReducers({
    user: userReducer,
    subscription: subscriptionReducer,
    auth: authReducer
});

export default reducers;
