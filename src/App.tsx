import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationState, configureAppStore } from './store';
import { Navigator } from "./navigator/Navigator";
import { searchInitialState } from './containers/Search/reducer';

const initialState: ApplicationState = {
  search: searchInitialState
};

const store = configureAppStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
