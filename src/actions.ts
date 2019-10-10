import { SAVE_TEXT } from "./ActionTypes";

export const saveText = (text: string) => {
    return {
        type: SAVE_TEXT,
        payload: {
            text
        }
    }
}