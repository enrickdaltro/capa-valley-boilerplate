import { action } from 'typesafe-actions';
import { ISignInAction, IUserSigned } from './types';

export function signInRequest(payload: ISignInAction) {
  return action('@auth/SIGN_IN_REQUEST', payload);
}

export function signInSuccess(payload: IUserSigned) {
  return action('@auth/SIGN_IN_SUCCESS', {
    payload,
  });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}
