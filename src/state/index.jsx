import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import mainReducers from './reducers';
import mainActions from './actions';

const getInitialState = () => ({
  isLoading: false,
  isNavOpened: false,
  theme: window.localStorage.getItem('rcp_theme') ?? 'light'
});

const StateContext = createContext([getInitialState(), () => null]);

export const StateProvider = ({ children, _state }) => {
  const [deviceSize, setDeviceSize] = useState();
  const initialState = _state ?? getInitialState();
  const [state, dispatch] = useReducer(mainReducers, initialState);
  const action = {};

  const handleWindowResize = () => {
    const { clientWidth } = document.documentElement;
    if (clientWidth >= 1900) setDeviceSize('xxxl');
    else if (clientWidth >= 1400) setDeviceSize('xxl');
    else if (clientWidth >= 1200) setDeviceSize('xl');
    else if (clientWidth >= 992) setDeviceSize('lg');
    else if (clientWidth >= 768) setDeviceSize('md');
    else if (clientWidth >= 576) setDeviceSize('sm');
    else setDeviceSize('xs');
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  Object.keys(mainActions)
    .forEach(actionName => action[actionName] = mainActions[actionName](dispatch));

  return (
    <StateContext.Provider
      value={{
        state: {
          ...state,
          deviceSize,
        },
        action,
      }}
    >
      {children}
    </StateContext.Provider >
  );
}

export const useStateValue = () => useContext(StateContext);