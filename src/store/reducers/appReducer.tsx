import { updateObject } from "../../shared/utilities";
import * as AppActions from "../actions/app";
export interface MyAppState {
    theme: string;
    preloader: boolean;
}
const initialState: MyAppState = {
    theme: "light",
    preloader: true,
};
const setTheme = (state: MyAppState, action: AppActions.SetTheme) => {
    let theme: string | null = localStorage.getItem("THEME_MODE");
    if (!theme) theme = state.theme;
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};
const switchTheme = (state: MyAppState, action: AppActions.SwitchTheme) => {
    let theme: string = state.theme == "light" ? "dark" : "light";
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};
const togglePreloader = (state: MyAppState, action: AppActions.TogglePreloader) => {
    return updateObject(state, { preloader: !state.preloader });
};
const reducer = (state = initialState, action: AppActions.AppActions) => {
    switch (action.type) {
        case AppActions.SET_THEME:
            return setTheme(state, action);
        case AppActions.SWITCH_THEME:
            return switchTheme(state, action);
        case AppActions.TOGGLE_PRELOADER:
            return togglePreloader(state, action);
        default:
            return state;
    }
};

export default reducer;
