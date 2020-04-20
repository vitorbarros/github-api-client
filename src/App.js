import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Routes from './routes';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
