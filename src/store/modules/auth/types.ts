import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  readonly loading: Boolean;
  readonly isSigned: Boolean;
  readonly error: Boolean;
  readonly token: string | null;
  readonly user: IUserSigned | null;
}

export interface ISignInAction {
  url?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface IUserSigned {
  url?: string;
  name: string;
  surname: string;
  email: string;
}
