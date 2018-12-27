import chalk from 'chalk'

export default {
  info(message, ...args) {
    console.info(chalk.blue(message), ...args)
  },
  warn(message, ...args) {
    console.warn(chalk.yellow(message), ...args)
  },
  success(message, ...args) {
    console.log(chalk.green(message), ...args)
  },
  error(error, ...args) {
    if (error instanceof Error) {
      console.error(chalk.red(error.stack), ...args)
    } else {
      console.error(chalk.red(error), ...args)
    }
  }
}
