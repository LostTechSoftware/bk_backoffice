class NotFoundError extends Error {
  constructor (message:string) {
    super(message)
    this.name = this.constructor.name
    this.message = message
  }
}

export default NotFoundError
