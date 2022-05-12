export class UnauthorizedError extends Error {
  constructor() {
    super('UnauthorizedError')
    this.name = 'UnauthorizedError'
  }
}
