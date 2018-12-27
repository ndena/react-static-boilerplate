import env from './env'

const host = env.APPLICATION_HOST || '0.0.0.0'
const port = env.APPLICATION_PORT || 3010

const assetHost = env.APPLICATION_ASSET_HOST || `${host}:${port}`

export default {
  environment: env.APPLICATION_ENVIRONMENT,

  host,
  port,
  assetHost,

  publicPath: '/assets/',
}
