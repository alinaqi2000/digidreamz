import { updateObject } from "../../shared/utilities";
import * as AppActions from "../actions/app";
export interface MyAppState {
    theme: string;
    isSignedIn: boolean;
    preloader: boolean;
    opneLeftSideBar: boolean;
    opneRightSideBar: boolean;
}
const initialState: MyAppState = {
    theme: "light",
    isSignedIn: false,
    preloader: true,
    opneLeftSideBar: false,
    opneRightSideBar: false
};
const setTheme = (state: MyAppState, action: AppActions.SetTheme) => {
    let theme: string | null = localStorage.getItem("THEME_MODE");
    if (!theme) theme = state.theme;
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};
const switchTheme = (state: MyAppState, action: AppActions.SwitchTheme): MyAppState => {
    let theme: string = state.theme == "light" ? "dark" : "light";
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};
const togglePreloader = (state: MyAppState, action: AppActions.TogglePreloader): MyAppState => {
    return updateObject(state, { preloader: action.payload });
};
const toggleLeftSidebar = (state: MyAppState, action: AppActions.ToggleLeftSidebar): MyAppState => {
    return updateObject(state, { opneLeftSideBar: !state.opneLeftSideBar });
};
const toggleRightSidebar = (state: MyAppState, action: AppActions.ToggleRightSidebar): MyAppState => {
    return updateObject(state, { opneRightSideBar: !state.opneRightSideBar });
};
const toggleSidebars = (state: MyAppState, action: AppActions.ToggleSidebars): MyAppState => {
    return updateObject(state, { opneRightSideBar: initialState.opneRightSideBar, opneLeftSideBar: initialState.opneLeftSideBar });
};
const reducer = (state = initialState, action: AppActions.AppActions) => {
    switch (action.type) {
        case AppActions.SET_THEME:
            return setTheme(state, action);
        case AppActions.SWITCH_THEME:
            return switchTheme(state, action);
        case AppActions.TOGGLE_PRELOADER:
            return togglePreloader(state, action);
        case AppActions.TOGGLE_LEFT_SIDEBAR:
            return toggleLeftSidebar(state, action);
        case AppActions.TOGGLE_RIGHT_SIDEBAR:
            return toggleRightSidebar(state, action);
        case AppActions.TOGGLE_SIDEBARS:
            return toggleSidebars(state, action);
        default:
            return state;
    }
};

export default reducer;
