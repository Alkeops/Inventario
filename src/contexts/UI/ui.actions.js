import { uiConstants as UI } from "./ui.constants";

export const changeTheme = (theme) => ({ type: UI.THEME_SELECTION, payload: theme });
