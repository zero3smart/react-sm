import { handleActions } from 'redux-actions';
import { INCREMENT } from '../../../constants';

const initialState = {
    counter: 0,
    lastValues: []
};

const subscriptionReducer = handleActions(
    {
        [INCREMENT]: (state, action) => ({
            ...state,
            counter: state.counter + action.payload,
            lastValues: [state.counter , ...state.lastValues]
        })
    },
    initialState
);

export default subscriptionReducer;
