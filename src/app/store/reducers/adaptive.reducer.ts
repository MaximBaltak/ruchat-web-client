import { createReducer, on } from '@ngrx/store';
import {changeWindowAction} from "../actions/adaptive.actions";
export const adaptiveFeatureKey = 'adaptive';

export interface IAdaptiveState {
  isDekstop : boolean,
  isMobile: boolean,
  isTablet: boolean
}

export const initialState: IAdaptiveState = {
  isDekstop:true,
  isMobile: false,
  isTablet: false
};

export const adaptiveReducer = createReducer(
  initialState,
  on(changeWindowAction,(state) =>{
    const width = window.innerWidth
    return {
      ...state,
      isDekstop : width > 1024,
      isTablet: width < 1024,
      isMobile: width < 600
    }
  })

);
