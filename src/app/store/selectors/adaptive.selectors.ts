import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IAdaptiveState,adaptiveFeatureKey} from "../reducers/adaptive.reducer";

const adaptiveSelector = createFeatureSelector<IAdaptiveState>(adaptiveFeatureKey)
export const isDekstopSelector = createSelector(
  adaptiveSelector,
  state => state.isDekstop
)
export const isTabletSelector = createSelector(
  adaptiveSelector,
  state => state.isTablet
)
export const isMobileSelector = createSelector(
  adaptiveSelector,
  state => state.isMobile
)
