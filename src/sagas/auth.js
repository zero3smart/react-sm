import { put, takeEvery } from 'redux-saga/effects';
import { IS_PARTNER, CHECK_PARTNER } from '../constants';

function* checkPartnerAsync(action) {
    yield put({ type: IS_PARTNER, data: action.payload });
}

export default function* watchCheckPartnerAsync() {
    yield takeEvery(CHECK_PARTNER, checkPartnerAsync);
}

