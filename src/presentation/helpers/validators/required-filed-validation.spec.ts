import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-filed-validation'

describe('RequiredFieldValidation', () => {
  test('should not return  if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
