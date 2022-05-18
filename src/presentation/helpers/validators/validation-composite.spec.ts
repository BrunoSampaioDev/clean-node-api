import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  class ValidationStub implements Validation {
    validate(input: any): Error {
      return new MissingParamError('filed')
    };
  }
  test('should return an error if any validation fails', () => {
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({ filed: 'any_value' })
    expect(error).toEqual(new MissingParamError('filed'))
  })
})
