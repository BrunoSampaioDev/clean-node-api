import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('password', 'passwordConfirmation')
}
describe('CompareFieldsValidation', () => {
  test('should return a  InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      password: 'any_value',
      passwordConfirmation: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('passwordConfirmation'))
  })

  test('should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      password: 'any_value',
      passwordConfirmation: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
