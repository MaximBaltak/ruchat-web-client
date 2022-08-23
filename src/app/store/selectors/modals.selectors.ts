import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IModalsState, modalsFeatureKey} from "../reducers/modals.reducer";

const modalsSelector = createFeatureSelector<IModalsState>(modalsFeatureKey)
export const isOpenInfoModalSelector = createSelector(
  modalsSelector,
  state => state.isOpenInfoModal
)
export const isOpenConfirmModalSelector = createSelector(
  modalsSelector,
  state => state.isOpenConfirmModal
)
export const isOpenSettingsModalSelector = createSelector(
  modalsSelector,
  state => state.isOpenSettingsModal
)
export const isModalSelector = createSelector(
  modalsSelector,
  state => state.isModal
)
