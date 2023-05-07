import React from 'react';
import { GamesList } from './components/gamesList/GamesList';
import '../src/styles/globals.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import TopBar from './components/topBar/topBar';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TopBar />
        <GamesList />
      </PersistGate>
    </Provider>
  );
}

export default App;
