import React, { Component } from 'react';
import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryTooltip
} from 'victory';

import ChartTooltip from './ChartTooltip';
import './Chart.css';

// import MOCK_DATA from 'data/mock1';
import MOCK_DATA from 'data/mock2';

class Chart extends Component {
  get axes() {
    return [
      <VictoryAxis key="xAxis" scale="time" tickFormat={this.yFormat} />,
      <VictoryAxis
        key="yAxis"
        dependentAxis
        tickFormat={d => `$${d / 1000}k`}
      />
    ];
  }

  get lineStyle() {
    return {
      data: {
        stroke: 'mediumseagreen'
      }
    };
  }

  get chartPadding() {
    return {
      top: 0,
      bottom: 35,
      left: 50,
      right: 50
    };
  }

  get data() {
    return MOCK_DATA.data.map(datum => ({
      ...datum,
      date: new Date(datum.date)
    }));
  }

  yFormat(d) {
    const date = new Date(d).toLocaleString('en-US', {
      month: 'long'
    });

    return date;
  }

  render() {
    return (
      <div className="my-chart">
        <VictoryChart
          domainPadding={20}
          height={200}
          padding={this.chartPadding}>
          {this.axes}
          <VictoryLine
            data={this.data}
            x="date"
            y="earnings"
            style={this.lineStyle}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
