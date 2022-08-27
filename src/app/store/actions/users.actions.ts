import { createAction, props } from '@ngrx/store';
import {actionTypes} from "./types";
import {typeForm} from "../../components/form/types";

export const toggleTypeFormAction = createAction(
  actionTypes.TOGGLE_TYPE_FORM,
  props<{typeForm:typeForm}>()
);

