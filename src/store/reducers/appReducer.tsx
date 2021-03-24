import { updateObject } from '../../shared/utilities';
import * as AppActions from '../actions/app';
export interface MyAppState {
    theme: string
}
const initialState: MyAppState = {
    theme: "light"
};
const setTheme = (state: MyAppState, action: AppActions.SetTheme) => {
    let theme: string | null = localStorage.getItem("THEME_MODE");
    if (!theme)
        theme = state.theme;
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};
const switchTheme = (state: MyAppState, action: AppActions.SwitchTheme) => {
    let theme: string = state.theme == "light" ? "dark" : "light";
    localStorage.setItem("THEME_MODE", theme);
    return updateObject(state, { theme });
};


const reducer = (state = initialState, action: AppActions.AppActions) => {
    switch (action.type) {
        case AppActions.SET_THEME: return setTheme(state, action);
        case AppActions.SWITCH_THEME: return switchTheme(state, action);
        default: return state;
    }
};

export default reducer;