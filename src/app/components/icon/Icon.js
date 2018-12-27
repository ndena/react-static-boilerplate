import React, { PureComponent, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { themed } from 'react-themed'
import classNames from 'classnames'

const getIcon = type => {
  switch (type) {
    case 'Hamburger': return lazy(() => import('./icons/Hamburger'))
    default: return null
  }
}

@themed(/^Icon/)
export default class IconCustom extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      id,
      type,
      theme,
      className,
      onClick,
      ...props
    } = this.props

    const Icon = getIcon(type)

    if (!Icon) {
      throw new Error(`Tried to render unknown icon "${type}"`)
    }

    const classname = classNames(
      className,
      theme.Icon,
      type && theme[`Icon-${type}`],
    )

    return (
      <span
        id={id}
        className={classname}
        onClick={onClick}
        >
        <Suspense fallback={<div></div>}>
          <Icon {...props} />
        </Suspense>
      </span>
    )
  }
}
