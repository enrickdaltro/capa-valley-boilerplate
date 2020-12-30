import { combineReducers } from 'redux';

import auth from './auth/reducer';
import { IApplicationState } from '../createStore';

export default combineReducers<IApplicationState>({
  auth,
});
