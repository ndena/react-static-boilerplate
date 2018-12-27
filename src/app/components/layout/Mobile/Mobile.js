import React, { PureComponent } from 'react'
import { Theme } from 'react-themed'
import { connect } from 'react-redux'

import AppBar from 'app/components/mobile/AppBar'
import Drawer from 'app/components/mobile/Drawer'

import Main from 'app/components/core/Main'

import theme from 'app/themes/mobile'

import {
  toggleDrawer,
} from 'app/actions/mobile'

import styles from './Mobile.css'
import Base from '../Base'

@connect(({
  mobile,
}) => ({
  mobile,
}))
export default class Mobile extends PureComponent {
  state = {
    title: '',
  }

  componentWillReceiveProps(props) {
    let title = ''

    switch (props.location.pathname) {
      default:
        title = ''
        break
    }

    if (title !== this.state.title) {
      this.setState({
        title,
      })
    }
  }

  renderMenuItem(label) {
    return (
      <div className={styles.MenuLabel}>
        {label}
      </div>
    )
  }

  render() {
    const {
      title,
    } = this.state
    const {
      dispatch,
      mobile: {
        drawerIsOpen,
      },
    } = this.props

    return (
      <Theme theme={theme}>
        <Base>
          <AppBar
            onLeftIconButtonClick={() => {
              this.handleToggle()
            }}
            >
            <div className={styles.TitleText}>
              {title}
            </div>
          </AppBar>
          {
            drawerIsOpen
            && <Drawer
                onClose={() => dispatch(toggleDrawer(false))}
              >

            </Drawer>
          }
          <Main>
            {this.props.children}
          </Main>
        </Base>
      </Theme>
    )
  }

  handleToggle = value => this.props.dispatch(toggleDrawer(value))
}
