import React, { Component } from 'react';
import './components/css/App.css';
import Provider from './Provider';
import Page from './components/Page';
import Menu from './components/menu';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Menu />
          <Page />
        </div>
      </Provider>
    );
  }
}

export default App;
