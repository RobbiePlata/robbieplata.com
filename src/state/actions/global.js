import { ACTION } from "@/utils/constants";

export const setNavOpened = dispatch => (state = false) => {
  dispatch({ type: ACTION.NAV_STATE_CHANGE, payload: { state } });
};

export const setTheme = dispatch => (state = "light") => {
  window.localStorage.setItem('rcp_theme', state)
  dispatch({ type: ACTION.THEME_CHANGE, payload: { state } });
};