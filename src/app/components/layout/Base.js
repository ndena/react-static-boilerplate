import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'

@themed([
  'Layout',
])

export default class Base extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      ...props
    } = this.props

    return (
      <div
        {...props}
        className={classNames(
          theme.Layout,
          className,
        )}
      />
    )
  }
}
