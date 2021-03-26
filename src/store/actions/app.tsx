import { Action } from "redux";

export const SET_THEME = "[App] Set Theme";
export const SWITCH_THEME = "[App] Switch Theme";
export const TOGGLE_PRELOADER = "[App] Toggle Preloader";

export class SetTheme implements Action {
  readonly type = SET_THEME;
}
export class SwitchTheme implements Action {
  readonly type = SWITCH_THEME;
}
export class TogglePreloader implements Action {
  readonly type = TOGGLE_PRELOADER;
}
export type AppActions = SetTheme | SwitchTheme | TogglePreloader;
