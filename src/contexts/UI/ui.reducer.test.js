import initialState from "./ui.initialState";
import * as actions from "./ui.actions";
import { uiReducer } from "./ui.reducer";
import { uiConstants as UI } from "./ui.constants";

describe("Intregation test for Ui.Reducer and actions", () => {
  let state = initialState;
  test(`should handle ${UI.THEME_SELECTION}`, () => {
    state = uiReducer(initialState, actions.changeTheme("dark"));
    expect(state.theme.name).toEqual("dark");
    state = uiReducer(state, actions.changeTheme("light"));
    expect(state.theme.name).toEqual("light");
  });
});
