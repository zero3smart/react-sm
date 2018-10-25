import { handleActions } from 'redux-actions';
import { SET_NAME } from '../../../constants';

const initialState = {
    name: null,
    lastValues: []
};

const userReducer = handleActions(
    {
        [SET_NAME]: (state, action) => ({
            ...state,
            name: action.payload,
            lastValues: [state.name , ...state.lastValues]
        })
    },
    initialState
);

export default userReducer;
