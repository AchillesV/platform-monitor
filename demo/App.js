import React, { Component } from 'react';
import logo from './amosinit.svg';
import './App.scss';

/**
 * your app component
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div className="demo">
        <div className="demo-header">
          <img src={logo} className="demo-logo" alt="logo" />
          <h2>Welcome to Amos init</h2>
        </div>
        <p className="demo-introduce">
          To get started, edit <code>demo/App.js</code> and save to reload.
        </p>
        <div className="demo-introduce">
          <p>
          To Use advanced features, please copy all demo files to src/entry.
          </p>
          <p>
          Then edit the webpack.config.js entry property, <code>./demo/index.js</code> to <code>./src/entry/index.js</code>.
          </p>
          <p>
          such as add a compoment:
          <code>$amos-init -c MyComponent</code>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
