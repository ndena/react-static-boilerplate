import toRegex from 'path-to-regexp'

const matchURI = (path, uri) => {
  const keys = []
  const pattern = toRegex(path, keys)
  const match = pattern.exec(uri)

  if (!match) return null

  const params = {}

  for (let i = 1; i < match.length; i += 1) {
    params[keys[i - 1].name] = match[i] !== undefined ? match[i] : undefined
  }

  return params
}

export default (routes, context) => {
  const route = routes.find(r => matchURI(r.path, context))

  if (route) {
    return route
  }

  return routes[routes.length - 1]
}
