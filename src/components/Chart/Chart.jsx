import React, { Component } from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';

import './Chart.css';

import MOCK_DATA from 'data/mock1';

class Chart extends Component {
  get axes() {
    return [
      <VictoryAxis
        key="xAxis"
        tickValues={this.xValues}
        tickFormat={d => `Quarter ${d}`}
      />,
      <VictoryAxis
        key="yAxis"
        dependentAxis
        tickFormat={d => `$${d / 1000}k`}
      />
    ];
  }

  get barStyle() {
    return {
      data: {
        fill: 'mediumseagreen'
      }
    };
  }

  get chartPadding() {
    return {
      top: 0,
      bottom: 25,
      left: 50,
      right: 50
    };
  }

  get data() {
    return MOCK_DATA.data;
  }

  get xValues() {
    return this.data.map(datum => datum.quarter);
  }

  render() {
    return (
      <div className="my-chart">
        <VictoryChart
          domainPadding={20}
          height={200}
          padding={this.chartPadding}>
          {this.axes}
          <VictoryBar
            data={this.data}
            labelComponent={<VictoryTooltip />}
            labels={({ datum }) => `$${datum.earnings}`}
            x="quarter"
            y="earnings"
            style={this.barStyle}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
