export default async (ctx, next) => {
  try {
    await next()
  } catch ({ status, stack, message }) {
    ctx.status = status || 500
    ctx.body = { errors: [{ message, stack }] }
  }
}
