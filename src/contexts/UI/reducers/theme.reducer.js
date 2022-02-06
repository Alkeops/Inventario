import { uiConstants as UI } from "../ui.constants";

const themes = {
  default: {
    "--color-white": "#fff",
    "--color-black": "#222",
    "--color-primary": "#5B59B6",
    "--color-gray": "#6B6B6B",
    "--color-success": "#0C600A",
    "--color-error": "#822323",
  },
  dark: {
    "--color-bg-white": "#15141d",
    "--color-black": "#fff",
    "--color-primary": "#8482e1",
    "--color-gray": "#bfbfbf",
    "--color-success": "#0C600A",
    "--color-error": "#822323",
  },
};

const theme = {
  [UI.THEME_SELECTION]: (state, payload) => ({
    ...state,
    theme: {
      name: payload,
      style: { ...(themes[payload] || themes["default"]) },
    },
  }),
};

export default theme;
