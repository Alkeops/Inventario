import { createContext, useContext, useReducer } from "react";
import initialState from "./ui.initialState";
import { uiReducer } from "./ui.reducer";

export const UiContext = createContext();

export const useUiContext = () => useContext(UiContext);

export const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  return (
    <UiContext.Provider value={{ ...state, dispatch }} displayName="Ui">
      {children}
    </UiContext.Provider>
  );
};
