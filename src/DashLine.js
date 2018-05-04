import React, { Component } from 'react'
import { View, requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

export default class DashLine extends Component {
  static propTypes = {
    ...View.propTypes,
    dashColor: PropTypes.string.isRequired,
    dashLineWidth: PropTypes.number,
    dashLineSpace: PropTypes.number,
  }

  render() {
    return (
      <DashLineComponent {...this.props} />
    )
  }
}

const DashLineComponent = requireNativeComponent('DashLineComponent', DashLine)
