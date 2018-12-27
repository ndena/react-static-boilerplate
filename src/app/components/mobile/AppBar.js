import React from 'react'
import PropType from 'prop-types'
import { themed } from 'react-themed'
import classnames from 'classnames'
import Icon from 'app/components/icon'

@themed(/^AppBar/)
export default class AppBar extends React.Component {
  static propTypes = {
    theme: PropType.object,
    onLeftIconButtonClick: PropType.func,
    color: PropType.string,
    leftIconColor: PropType.string,
  }

  static defaultProps = {
    theme: {},
    color: 'grey',
    leftIconColor: '#FFFFFF',
  }

  render() {
    const {
      theme,
      color,
      onLeftIconButtonClick,
      leftIconColor,
      children,
      className,
    } = this.props

    return (
      <div className={classnames(
        theme.AppBar,
        theme[`AppBar-${color}`],
        className,
      )}>
        {children}
        <Icon
          type='Hamburger'
          className={theme.AppBarLeftIcon}
          onClick={onLeftIconButtonClick}
          stroke={leftIconColor}
        />
      </div>
    )
  }
}
