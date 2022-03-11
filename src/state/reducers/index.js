import globalReducer from './global';

const mainReducer = ({ isLoading, isNavOpened, theme }, action) => ({
  ...globalReducer({ isLoading, isNavOpened, theme }, action),
});

export default mainReducer;