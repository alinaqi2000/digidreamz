import { Action } from "redux";

export const SET_THEME = '[App] Set Theme';
export const SWITCH_THEME = '[App] Switch Theme';

export class SetTheme implements Action {
    readonly type = SET_THEME;
}
export class SwitchTheme implements Action {
    readonly type = SWITCH_THEME;
}


export type AppActions = SetTheme | SwitchTheme;
