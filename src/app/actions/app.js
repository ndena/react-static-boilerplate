export const INIT = 'APP/INIT'

export const init = (payload = {}) => ({
  type: INIT,
  ...payload,
})
