import Koa from 'koa'
import convert from 'koa-convert'
import proxy from 'koa-proxy'
import cors from 'koa-cors'
import serve from 'koa-static'
import {
  PUBLIC_DIR_SITEMAP,
} from './config/paths'
import routerMiddleware from './middleware/router'
import env from './config/env'

const app = new Koa()


if (env.WEBPACK_DEV_SERVER_PATH && env.APPLICATION_ENVIRONMENT === 'development') {
  app.use(convert(proxy({
    host: env.WEBPACK_DEV_SERVER_PATH,
    match: /\/assets\//,
  })))
}

app.use(serve(PUBLIC_DIR_SITEMAP))

app.use(routerMiddleware)

export default app
