import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Chart from 'components/Chart/Chart';
import Panel from 'components/Panel/Panel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <Panel heading="2017 Financial earnings">
          <Chart />
        </Panel>
      </div>
    );
  }
}

export default hot(App);
