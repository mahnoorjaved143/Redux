import React from 'react';
import './App.css';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>   
      <div className="App">
      <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
