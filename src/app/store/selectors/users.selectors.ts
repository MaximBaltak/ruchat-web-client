import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IAdaptiveState,adaptiveFeatureKey} from "../reducers/adaptive.reducer";
import {IUsersState, usersFeatureKey} from "../reducers/users.reducer";

const usersSelector = createFeatureSelector<IUsersState>(usersFeatureKey)
export const typeFormSelector = createSelector(
  usersSelector,
  state => state.typeForm
)

