import {
  badRequest,
  ok,
  serverError,
  unauthorized
} from '../../helpers/http/http-helper'
import {
  Validation,
  Controller,
  HttpRequest,
  HttpResponse,
  Authentication
} from './login-protocols'

export class LoginController implements Controller {
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body

      const accesToken = await this.authentication.auth({ email, password })
      if (!accesToken) {
        return unauthorized()
      }

      return ok({ accesToken })
    } catch (error) {
      console.log(error)

      return serverError(error)
    }
  }
}
