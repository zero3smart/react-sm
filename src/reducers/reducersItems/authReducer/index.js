import { handleActions } from 'redux-actions';
import { IS_PARTNER } from '../../../constants';

const initialState = {
    isPartner: false
};

const authReducer = handleActions(
    {
        [IS_PARTNER]: (state, action) => ({
            ...state,
            isPartner: action.data
        })
    },
    initialState
);

export default authReducer;