import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error {
      return null
    };
  }
  return new ValidationStub()
}

interface SutTypes {
  sut: ValidationComposite
  validationStubs: Validation[]
}

const makeSut = (): SutTypes => {
  const validationStubs = [
    makeValidation(),
    makeValidation()
  ]
  const sut = new ValidationComposite(validationStubs)

  return { sut, validationStubs }
}
describe('ValidationComposite', () => {
  test('should return an error if any validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('filed'))
    const error = sut.validate({ filed: 'any_value' })
    expect(error).toEqual(new MissingParamError('filed'))
  })

  test('should return the first error if more one validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('filed'))

    const error = sut.validate({ filed: 'any_value' })
    expect(error).toEqual(new Error())
  })

  test('should not return if validations succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ filed: 'any_value' })
    expect(error).toBeFalsy()
  })
})
