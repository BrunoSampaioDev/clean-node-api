import { MissingParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) { }

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
