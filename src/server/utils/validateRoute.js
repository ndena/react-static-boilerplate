import routes from 'server/config/routes'

const findUrl = (urlArray, rts) => rts.find(u => {
  const uNormalize = u.path.split(':')

  if (uNormalize[0] === `/${urlArray[0] || ''}`) {
    if (!u.routes) {
      return urlArray.length < 2
    }

    return findUrl(urlArray.slice(1), u.routes)
  }

  if (uNormalize[0] === `/${urlArray[0]}/`) {
    if (!u.routes && urlArray.length === 2) {
      return true
    }

    if (!u.routes) {
      return false
    }

    return findUrl(urlArray.slice(1), u.routes)
  }

  if (uNormalize.length > 1
    && uNormalize[1] === 'id'
    && !isNaN(urlArray[0])) {
    return true
  }

  return false
})

export default url => {
  const stripped = url.split('?')[0]
  return findUrl(stripped.split('/').slice(1), routes)
}
