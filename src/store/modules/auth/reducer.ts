import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  loading: false,
  isSigned: false,
  error: false,
  token: null,
  user: null,
};

export default function auth(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loading: false,
        isSigned: true,
        user: action.payload.payload,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
