import {
  ActionReducerMap,

} from '@ngrx/store';
import {adaptiveReducer, IAdaptiveState} from "./reducers/adaptive.reducer";
import {IModalsState, modalsReducer} from "./reducers/modals.reducer";

export interface AppState {
  adaptive: IAdaptiveState,
  modals: IModalsState
}

export const reducers: ActionReducerMap<AppState> = {
  adaptive: adaptiveReducer,
  modals: modalsReducer
};

