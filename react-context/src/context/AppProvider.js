import React, { createContext, useReducer, useContext } from 'react';
import initialState from './initialState';
import AppReducer from './AppReducer';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

// pour envoyer state et dispatch dans toute l'app
const AppProvider = ({ children }) => {
  // ici ecrit une seule fois !
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
//hey customHook !
export const useApp = () => {
  return {
    state: useContext(AppStateContext),
    dispatch: useContext(AppDispatchContext)
  };
}

export default AppProvider;