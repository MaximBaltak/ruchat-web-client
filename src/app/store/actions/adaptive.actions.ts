import { createAction, props } from '@ngrx/store';
import {actionTypes} from "./types";

export const changeWindowAction = createAction(
  actionTypes.CHANGE_WINDOW
);

