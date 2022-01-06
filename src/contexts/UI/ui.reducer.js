import theme from "./reducers/theme.reducer";

export const uiReducer = (state, { type, payload }) => {
  let reducers = {
    ...theme,
  };
  if (!reducers[type]) return state;
  return reducers[type](state, payload);
};
