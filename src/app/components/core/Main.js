import React, { PureComponent } from 'react'
import { themed } from 'react-themed'
import classNames from 'classnames'

@themed([
  'Main',
])

export default class Main extends PureComponent {
  render() {
    const {
      theme,
      className,
      ...props
    } = this.props

    return (
      <main
        {...props}
        className={classNames(
          className,
          theme.Main,
        )}
      />
    )
  }
}
