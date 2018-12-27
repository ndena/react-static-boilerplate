import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Loading/)

export default class Loading extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      type,
      theme,
      className,
      ...props
    } = this.props

    return (
      <div
        {...props}
        className={classNames(
          className,
          theme.Loading,
          theme[`Loading-${type}`],
        )}
      />
    )
  }
}
