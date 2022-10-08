import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-routes-adapter'
import { makeLoginController } from '../factories/login/login-factory'
import { makeSignUpController } from '../factories/signup/signup'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
