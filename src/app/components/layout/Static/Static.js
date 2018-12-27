import React, { PureComponent } from 'react'
import { Theme } from 'react-themed'
import theme from 'app/themes/static'

import Main from 'app/components/core/Main'
import Base from '../Base'

export default class Layout extends PureComponent {
  render() {
    return (
      <Theme theme={theme}>
        <Base className={this.props.className}>
          <Main>
            {this.props.children}
          </Main>
        </Base>
      </Theme>
    )
  }
}
