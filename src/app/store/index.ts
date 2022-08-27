import {
  ActionReducerMap,

} from '@ngrx/store';
import {adaptiveReducer, IAdaptiveState} from "./reducers/adaptive.reducer";
import {IModalsState, modalsReducer} from "./reducers/modals.reducer";
import {IUsersState, usersReducer} from "./reducers/users.reducer";

export interface AppState {
  adaptive: IAdaptiveState,
  modals: IModalsState,
  users: IUsersState,
}

export const reducers: ActionReducerMap<AppState> = {
  adaptive: adaptiveReducer,
  modals: modalsReducer,
  users: usersReducer
};

