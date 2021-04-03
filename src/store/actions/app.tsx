import { Action } from "redux";
// Theme
export const SET_THEME = "[Theme] Set Theme";
export const SWITCH_THEME = "[Theme] Switch Theme";
export const TOGGLE_PRELOADER = "[Theme] Toggle Preloader";
export const TOGGLE_LEFT_SIDEBAR = "[Theme] Toggle Left Sidebar";
export const TOGGLE_RIGHT_SIDEBAR = "[Theme] Toggle Right Sidebar";
export const TOGGLE_SIDEBARS = "[Theme] Toggle Sidebars";

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
export class ToggleLeftSidebar implements Action {
  readonly type = TOGGLE_LEFT_SIDEBAR;
}
export class ToggleRightSidebar implements Action {
  readonly type = TOGGLE_RIGHT_SIDEBAR;
}
export class ToggleSidebars implements Action {
  readonly type = TOGGLE_SIDEBARS;
}
export type AppActions = SetTheme | SwitchTheme | TogglePreloader | ToggleLeftSidebar | ToggleRightSidebar | ToggleSidebars;
