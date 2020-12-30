import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ISignInAction } from './types';

export function* signIn(action: ActionType<typeof actions.signInRequest>) {
  try {
    // do something
    yield put(actions.signInSuccess(action.payload));
  } catch (error) {
    // error handling
    yield put(actions.signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
