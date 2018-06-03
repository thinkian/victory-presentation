import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Panel.css';

class Panel extends Component {
  render() {
    const { children, heading } = this.props;

    return (
      <div className="my-panel">
        <div className="my-panel-header">
          <h2 className="my-panel-heading">{heading}</h2>
        </div>
        <div className="my-panel-body">{children}</div>
      </div>
    );
  }
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired
};

export default Panel;
