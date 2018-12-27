import React from 'react'
import PropType from 'prop-types'
import { themed } from 'react-themed'
import classnames from 'classnames'

@themed(/^Drawer/)
export default class Drawer extends React.Component {
  static propTypes = {
    theme: PropType.object,
    onClose: PropType.func,
    color: PropType.string,
  }

  static defaultProps = {
    theme: {},
    color: 'blue',
  }

  render() {
    const {
      theme,
      color,
      children,
      onClose,
    } = this.props

    return (
      <div className={theme.Drawer}>
        <div className={classnames(
          theme.DrawerContent,
          theme[`Drawer-${color}`],
        )}>
          {children}
        </div>
        <div
          className={theme.DrawerOverlay}
          onClick={onClose}
        >
        </div>
      </div>
    )
  }
}
