import { RequiredFieldValidation, ValidationComposite, EmailValidation } from '../../../presentation/helpers/validators'
import { Validation } from '../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  }

  return new ValidationComposite(validations)
}
