import {createReducer, on} from '@ngrx/store';
import {changeWindowAction} from "../actions/adaptive.actions";
import {typeForm} from "../../components/form/types";
import {toggleTypeFormAction} from "../actions/users.actions";

export const usersFeatureKey = 'users';

export interface IUsersState {
  typeForm:typeForm
}

export const initialState: IUsersState = {
  typeForm:typeForm.REGISTRATION
};

export const usersReducer = createReducer(
  initialState,
  on(toggleTypeFormAction,(state,{typeForm}) =>{
    return {
      ...state,
      typeForm: typeForm
    }
  })

);
