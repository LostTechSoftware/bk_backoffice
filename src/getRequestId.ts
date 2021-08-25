import httpContext from 'express-http-context'

const getRequestId = (): void => {
  return httpContext.get('requestId')
}

export default getRequestId
