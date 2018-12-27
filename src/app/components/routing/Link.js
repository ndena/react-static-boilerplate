import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import history from 'app/router/history'

export default class Link extends PureComponent {
  static propTypes = {
    to: PropTypes.string,
  }

  render() {
    const {
      children,
      to,
    } = this.props

    return (
      <a
      href={to}
      onClick={this.transition}
      >
      {children}
      </a>
    )
  }

  transition = e => {
    e.preventDefault()
    history.push(this.props.to)
  }
}
