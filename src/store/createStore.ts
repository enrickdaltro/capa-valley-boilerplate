import { AuthState, AuthAction } from './modules/auth/types';
import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';

export interface IApplicationState {
  auth: AuthState;
}

export type ApplicationActions = AuthAction;

export default (
  reducers: Reducer<IApplicationState, ApplicationActions>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
