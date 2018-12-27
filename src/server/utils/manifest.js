import app from 'server/config/app'

const { environment, publicPath } = app

let manifest = {}

if (environment !== 'development') {
  manifest = require('server/config/manifest')
}

export default {
  get(file) {
    return `${environment === 'development' ? publicPath : ''}${file ? manifest[file] || file : ''}`
    // return `${environment === 'development' ? publicPath : `//${host}`}${file ? manifest[file] || file : ''}`
  },
}
