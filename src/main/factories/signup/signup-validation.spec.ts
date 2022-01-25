import { CompareFieldsValidation, RequiredFieldValidation, ValidationComposite } from '../../../presentation/helpers/validators'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { EmailValidator, Validation } from '../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../../presentation/helpers/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}
describe('makeSignUpValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []

    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
      validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
      validations.push(new EmailValidation('email', makeEmailValidator()))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
