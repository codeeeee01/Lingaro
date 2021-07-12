import {takeLatest, call, put} from 'redux-saga/effects';
import {
  homepageActionTypes,
  homepageSuccess,
  homepageFailed,
} from './homepageReducer';
import {getPhotos} from '../../../services/data.services';

export function* watchUserHomepageRequest() {
  try {
    const result = yield call(getPhotos);
    console.log('data', result);
    yield put(homepageSuccess(result));
  } catch (err) {
    yield put(homepageFailed(err.message));
  }
}

export default function* root() {
  yield takeLatest(
    homepageActionTypes.HOMEPAGE.REQUEST,
    watchUserHomepageRequest,
  );
}
