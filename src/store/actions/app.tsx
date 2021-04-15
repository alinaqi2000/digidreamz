import { Action } from "redux";
import { AlertMessage } from "../../models/UI/AlertMessage";
import { CPage } from "../../models/UI/CPage";
import { ModalAction, ShowModal } from "../../models/UI/ShowModal";
// Theme
export const SET_THEME = "[Theme] Set Theme";
export const SWITCH_THEME = "[Theme] Switch Theme";
// UI
export const TOGGLE_PRELOADER = "[UI] Toggle Preloader";
export const TOGGLE_LEFT_SIDEBAR = "[UI] Toggle Left Sidebar";
export const TOGGLE_RIGHT_SIDEBAR = "[UI] Toggle Right Sidebar";
export const TOGGLE_SIDEBARS = "[UI] Toggle Sidebars";
export const SET_CURRRENT_PAGE = "[UI] Set Current Page";

export const SET_SHOW_MODAL = "[UI] Set Show Modal";
export const SET_SHOW_MODAL_ACTIONS = "[UI] Set Show Modal Actions";

export const SET_ALERT_MESSAGE = "[UI] Set Alert Message";
export const REDUCE_ALERT_MESSAGE = "[UI] Reduce Alert Message";
export const SET_SETUP_MODAL = "[UI] Set Setup Modal";

// Theme
export class SetTheme implements Action {
  readonly type = SET_THEME;
}
export class SwitchTheme implements Action {
  readonly type = SWITCH_THEME;
}
// UI
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
export class SetCurrrentPage implements Action {
  readonly type = SET_CURRRENT_PAGE;
  constructor(public payload: string) { }
}
export class SetShowModal implements Action {
  readonly type = SET_SHOW_MODAL;
  constructor(public payload: ShowModal) { }
}
export class SetShowModalActions implements Action {
  readonly type = SET_SHOW_MODAL_ACTIONS;
  constructor(public payload: ModalAction[]) { }
}
export class SetAlertMessage implements Action {
  readonly type = SET_ALERT_MESSAGE;
  constructor(public payload: AlertMessage) { }
}
export class ReduceAlertMessage implements Action {
  readonly type = REDUCE_ALERT_MESSAGE;
  constructor(public payload: number) { }
}
export class SetSetupModal implements Action {
  readonly type = SET_SETUP_MODAL;
  constructor(public payload: string) { }
}

export type AppActions = SetTheme | SwitchTheme | SetSetupModal | SetShowModalActions | ReduceAlertMessage | SetAlertMessage | SetCurrrentPage | SetShowModal | TogglePreloader | ToggleLeftSidebar | ToggleRightSidebar | ToggleSidebars;
