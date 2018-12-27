import React, { PureComponent } from 'react'
import Layout from '../layout/Static'

export default class NotFound extends PureComponent {
  render() {
    return (
      <Layout>
        <div style={{
          marginTop: 57,
          height: 'calc(100vh - 57px)',
          fontSize: 24,
          padding: 20,
          textAlign: 'left',
          color: 'grey',
        }}>
          Ooops, you are in the wrong spot.
        </div>
      </Layout>
    )
  }
}
