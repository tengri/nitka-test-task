import { ActionTypes, SAVE_TEXT } from './ActionTypes';
import { AppState } from "./interfaces";

export const reducers = (state: AppState = {text: ''}, action: ActionTypes) => {
    switch (action.type) {
        case SAVE_TEXT:
            return {...state, text: action.payload.text};
        default:
            return state;
    }
};