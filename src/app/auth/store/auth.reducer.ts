import * as AuthActions from './auth.actions';
import { User } from '../user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export function authReducer(
  state = initialState,
  action: AuthActions.Actions
): State {
  switch (action.type) {
    // case AuthActions.ActionTypes.TYPE: {
    //   return {
    //     // return new AuthActions state
    //   };
    // }

    default: {
      return state;
    }
  }
}
