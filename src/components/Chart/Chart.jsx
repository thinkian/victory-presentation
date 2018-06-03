import React, { Component } from 'react';

import './Chart.css';

import MOCK_DATA from 'data/mock1';

class Chart extends Component {
  get data() {
    return MOCK_DATA.data;
  }

  render() {
    return <div className="my-chart">Award winning chart goes here</div>;
  }
}

export default Chart;
