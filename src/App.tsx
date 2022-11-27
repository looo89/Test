import React from 'react'
import { Provider } from 'react-redux';
import './App.css';

import { Layout } from './components/Layout/Layout';
import {Menu} from './components/Menu/Menu';

import {store} from './../src/store/store'
import { BrowserRouter } from 'react-router-dom';

const App: React.FC =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Menu/>
          <Layout/>
        </Provider>
      </BrowserRouter>
          
    
    </div>
  );
}

export default App
