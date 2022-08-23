import { createAction, props } from '@ngrx/store';
import {actionTypes} from "./types";

export const openInfoModalAction = createAction(
  actionTypes.openInfoModal,
);
export const openConfirmModalAction = createAction(
  actionTypes.openConfirmModal,
);
export const openSettingsModalAction = createAction(
  actionTypes.openSettingsModal,
);
export const closeModalsAction = createAction(
  actionTypes.closeModals,
);

