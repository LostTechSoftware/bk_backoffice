class UnauthorizedError extends Error {
  status: number
  constructor (message:string) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.status = 401
  }
}

export default UnauthorizedError
