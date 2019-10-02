import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { VictoryTooltip } from 'victory';

class ChartTooltip extends Component {
  static defaultEvents = VictoryTooltip.defaultEvents;

  static propTypes = {
    active: PropTypes.bool,
    datum: PropTypes.object,
    x: PropTypes.number,
    y: PropTypes.number
  };

  static defaultProps = {
    active: false
  };

  constructor(props) {
    super(props);

    this.state = {
      position: null,
      x: 0,
      y: 0
    };
  }

  get portal() {
    const { active } = this.props;
    const domNode = document.querySelector('.my-app');

    if (!active || !domNode) {
      return null;
    }

    return createPortal(this.tooltip, domNode);
  }

  get tooltip() {
    const { datum } = this.props;
    const { position } = this.state;
    const style = {
      position: 'absolute',
      left: position.x,
      top: position.y - 55
    };

    return (
      <div className="my-tooltip-wrapper" style={style}>
        <div className="my-tooltip">
          <strong>{`$${datum.earnings}`}</strong>
        </div>
      </div>
    );
  }

  calcTooltipPosition(node, x, y) {
    if (node && this.state.x !== x && this.state.y !== y) {
      this.setState({
        x,
        y,
        position: node.getBoundingClientRect()
      });
    }
  }

  render() {
    const { x, y } = this.props;

    return (
      <g>
        <circle
          r="5"
          fill="transparent"
          cx={x}
          cy={y}
          ref={node => this.calcTooltipPosition(node, x, y)}
        />
        {this.portal}
      </g>
    );
  }
}

export default ChartTooltip;
