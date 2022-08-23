import { Action, createReducer, on } from '@ngrx/store';
import {
  closeModalsAction, openConfirmModalAction, openInfoModalAction, openSettingsModalAction,
} from "../actions/modals.actions";


export const modalsFeatureKey = 'modals';

export interface IModalsState {
  isModal:boolean,
  isOpenInfoModal: boolean,
  isOpenConfirmModal: boolean,
  isOpenSettingsModal: boolean
}

export const initialState: IModalsState = {
  isModal:false,
  isOpenConfirmModal: false,
  isOpenInfoModal: false,
  isOpenSettingsModal: false
};

export const modalsReducer = createReducer(
  initialState,
  on(openInfoModalAction,(state)=>{
   return {
     ...state,
     isModal: true,
     isOpenInfoModal: true
   }
  }),
  on(openConfirmModalAction,(state)=>{
    return {
      ...state,
      isModal: true,
      isOpenConfirmModal: true
    }
  }),
  on(openSettingsModalAction,(state)=>{
    return {
      ...state,
      isModal: true,
      isOpenSettingsModal: true
    }
  }),
  on(closeModalsAction,(state)=>{
    return{
      ...state,
      isModal:false,
      isOpenSettingsModal: false,
      isOpenInfoModal: false,
      isOpenConfirmModal: false
    }
  })

);
