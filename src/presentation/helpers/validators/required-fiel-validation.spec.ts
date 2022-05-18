import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-fiel-validation'

describe('RequiredFieldValidation', () => {
  test('should return a  MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate({ email: 'any_email@mail.com' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })
})
