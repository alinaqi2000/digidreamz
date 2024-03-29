import { AlertMessage } from "../../models/UI/AlertMessage";
import { CPage } from "../../models/UI/CPage";
import { ShowModal } from "../../models/UI/ShowModal";
import { getPage, updateObject } from "../../shared/utilities";
import * as AppActions from "../actions/app";
const pages: CPage[] = [
    new CPage("Home", "/", "Home - Share your dreams", ""),
    new CPage("Explore", "/explore", "Explore with DigiDreamz", ""),
    new CPage("Notifications", "/notifications", "Notifications - DigiDreamz", "")

];

export interface MyAppState {
    theme: string;
    isSignedIn: boolean;
    preloader: boolean;
    opneLeftSideBar: boolean;
    opneRightSideBar: boolean;
    cPage: CPage;
    showModal: ShowModal
    alertMessages: AlertMessage[],
    setupModal: string
}
const initialState: MyAppState = {
    theme: "light",
    isSignedIn: false,
    preloader: true,
    opneLeftSideBar: false,
    opneRightSideBar: false,
    cPage: pages[0],
    showModal: new ShowModal(),
    alertMessages: [],
    setupModal: ""
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
const setCurrentPage = (state: MyAppState, action: AppActions.SetCurrrentPage): MyAppState => {
    return updateObject(state, { cPage: getPage(action.payload, pages) });
};
const setShowModal = (state: MyAppState, action: AppActions.SetShowModal): MyAppState => {
    return updateObject(state, { showModal: action.payload });
};
const setShowModalActions = (state: MyAppState, action: AppActions.SetShowModalActions): MyAppState => {
    return updateObject(state, { showModal: { ...state.showModal, actions: action.payload } });
};
const setAlertMessage = (state: MyAppState, action: AppActions.SetAlertMessage): MyAppState => {
    if (state.alertMessages && state.alertMessages.length > 4) {
        state.alertMessages.splice(0, 1);
    }
    return updateObject(state, { alertMessages: [...state.alertMessages, action.payload] });
};
const reduceAlertMessage = (state: MyAppState, action: AppActions.ReduceAlertMessage): MyAppState => {
    var index = state.alertMessages.findIndex(msg => msg.key === action.payload);
    state.alertMessages.splice(index, 1);
    return updateObject(state, { alertMessages: state.alertMessages });
};
const setSetupModal = (state: MyAppState, action: AppActions.SetSetupModal): MyAppState => {
    return updateObject(state, { setupModal: action.payload });
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
        case AppActions.SET_CURRRENT_PAGE:
            return setCurrentPage(state, action);
        case AppActions.SET_SHOW_MODAL:
            return setShowModal(state, action);
        case AppActions.SET_SHOW_MODAL_ACTIONS:
            return setShowModalActions(state, action);
        case AppActions.SET_ALERT_MESSAGE:
            return setAlertMessage(state, action);
        case AppActions.REDUCE_ALERT_MESSAGE:
            return reduceAlertMessage(state, action);
        case AppActions.SET_SETUP_MODAL:
            return setSetupModal(state, action);
        default:
            return state;
    }
};

export default reducer;
