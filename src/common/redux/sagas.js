import {all, call} from 'redux-saga/effects';
import homepage from './homepage/homepageSaga';

export default function* root() {
  yield all([call(homepage)]);
}
