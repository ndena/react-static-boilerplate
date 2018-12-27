import { SafeString } from 'handlebars'
import config from 'server/config/app'
import manifest from 'server/utils/manifest'
import validateRoute from 'server/utils/validateRoute'
import template from '../templates/Html'

export default async ctx => {
  Object.assign(ctx, {
    status: validateRoute(ctx.url) ? 200 : 404,
    body: template({
      styles: [

      ],
      scripts: [
        manifest.get('app.js'),
      ],
    }),
  })
}
