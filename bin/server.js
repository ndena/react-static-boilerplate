import server from 'server'
import logger from 'server/utils/logger'
import app from 'server/config/app'

const { environment, host, port } = app

server.listen(port, host, err => {
  if (err) {
    logger.error(`==> Error: Unable to start server.\n${err}`)
  } else {
    logger.info(`* Node Version ${process.version}`)
    logger.info(`* Environment: ${environment}`)
    logger.info(`* Listening on ${host}:${port}\n`)
  }
})
