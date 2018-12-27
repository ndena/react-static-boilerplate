import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import App from 'app/components/layout/App'

import history from 'app/router/history'
import router from 'app/router/router'

export default class Router extends PureComponent {
  static propTypes = {
    routes: PropTypes.array,
  }

  componentWillMount() {
    this.setState({
      location: window.location,
      route: router(this.props.routes, window.location.pathname),
      unlisten: history.listen(location => {
        this.setState({
          location,
          route: router(this.props.routes, location.pathname),
        })
      }),
    })
  }

  componentWillUnmount() {
    this.state.unlisten()
  }

  render() {
    const {
      route,
      location,
    } = this.state

    const Route = route.component
    return (
      <App>
        <Route location={location} route={route}/>
      </App>
    )
  }
}
