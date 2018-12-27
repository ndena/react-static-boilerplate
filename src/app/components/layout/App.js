import React, { PureComponent } from 'react'
import { Theme } from 'react-themed'
import { connect } from 'react-redux'
import theme from 'app/themes/base'

import { updateDimensions } from 'app/actions/dimensions'

@connect(({
  dimensions,
}) => ({
  dimensions,
  alert,
}))
export default class App extends PureComponent {
  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <Theme theme={theme}>
        <div>
          {children}
        </div>
      </Theme>
    )
  }

  updateDimensions = () => {
    this.props.dispatch(updateDimensions())
  }
}
