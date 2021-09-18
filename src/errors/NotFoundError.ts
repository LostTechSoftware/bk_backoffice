class NotFoundError extends Error {
  status: number
  constructor (message:string) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.status = 404
  }
}

export default NotFoundError
