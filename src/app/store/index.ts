import {
  ActionReducerMap,

} from '@ngrx/store';
import {adaptiveReducer, IAdaptiveState} from "./reducers/adaptive.reducer";

export interface AppState {
  adaptive: IAdaptiveState
}

export const reducers: ActionReducerMap<AppState> = {
  adaptive: adaptiveReducer
};

