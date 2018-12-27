import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({ dimensions }) => ({ dimensions }))
export default class Home extends Component {
  render() {
    const {
      dimensions: {
        type,
      },
      route,
      location,
    } = this.props

    const Layout = route.layout(type)

    return (
      <Layout location={location}>
        My Static React Boilerplate.
      </Layout>
    )
  }
}
