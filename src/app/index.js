import domready from 'domready'
import { render } from 'react-dom'

import createApp from './create'

const app = createApp()

domready(() => (
  render(app.element, document.getElementById('root'))
))
