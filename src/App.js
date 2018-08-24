import React, { Component } from 'react';
import './App.css';
import store from './Store'

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to Counter In react and Mobx</h1>
        </header>

        <Counter store={store}/>

    </div>
    )
  }
}

export default App;
