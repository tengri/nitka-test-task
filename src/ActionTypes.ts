export const SAVE_TEXT = 'SAVE_TEXT';

export interface SaveTextAction {
    type: typeof SAVE_TEXT;
    payload: {
        text: string;
    }
}

export type ActionTypes = SaveTextAction;
