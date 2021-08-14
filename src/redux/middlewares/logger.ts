import { Middleware } from 'redux'

export const logger: Middleware = (api) => (next) => (action) => {
  const isDevelopmentMode = process.env.NODE_ENV === 'development'

  if (isDevelopmentMode) {
    console.log(
      `%cMODE %c${process.env.NODE_ENV}`,
      'color:#956320; font-weight: 900;',
      'color:#786595'
    )

    console.log('%cACTION', 'color:#ff0044; font-weight: 900;', action)
  }

  const result = next(action)
  isDevelopmentMode && console.log('current state', api.getState())
  return result
}
