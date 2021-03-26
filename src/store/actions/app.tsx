import { Action } from "redux";
import { User } from "../../models/User";
// Theme
export const SET_THEME = "[Theme] Set Theme";
export const SWITCH_THEME = "[Theme] Switch Theme";
export const TOGGLE_PRELOADER = "[Theme] Toggle Preloader";
// User
export const SET_USER = "[User] Set User";

// Theme
export class SetTheme implements Action {
  readonly type = SET_THEME;
}
export class SwitchTheme implements Action {
  readonly type = SWITCH_THEME;
}
export class TogglePreloader implements Action {
  readonly type = TOGGLE_PRELOADER;
  constructor(public payload: boolean) { }
}
// User
export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) { }
}
export type AppActions = SetTheme | SwitchTheme | TogglePreloader | SetUser;
