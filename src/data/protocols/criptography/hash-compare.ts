export interface HashCompare {
  compare(value: any, hash: any): Promise<boolean>
}