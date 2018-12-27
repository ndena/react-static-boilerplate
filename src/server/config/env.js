const path = require('path')
const dotenv = require('dotenv')

const paths = [
  path.join(process.cwd(), '.env'),
]

paths.forEach(path => {
  dotenv.config({ path, silent: true })
})

const env = process.env

env.APPLICATION_ENVIRONMENT = env.APPLICATION_ENVIRONMENT || 'development'
env.NODE_ENV = env.NODE_ENV || env.APPLICATION_ENVIRONMENT

module.exports = env
