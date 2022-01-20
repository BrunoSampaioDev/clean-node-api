import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-filed-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}
describe('RequiredFieldValidation', () => {
  test('should not return  if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
