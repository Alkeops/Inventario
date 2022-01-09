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
    "--color-bg-white": "#222",
    "--color-black": "#fff",
    "--color-primary": "#8482e1",
    "--color-gray": "#bfbfbf",
    "--color-light-gray": "#2e2e2e",
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
