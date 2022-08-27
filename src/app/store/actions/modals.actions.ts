import { createAction, props } from '@ngrx/store';
import {actionTypes} from "./types";

export const openInfoModalAction = createAction(
  actionTypes.OPEN_INFO_MODAL,
);
export const openConfirmModalAction = createAction(
  actionTypes.OPEN_CONFIRM_MODAL,
);
export const openSettingsModalAction = createAction(
  actionTypes.OPEN_SETTINGS_MODAL,
);
export const closeModalsAction = createAction(
  actionTypes.CLOSE_MODALS,
);

