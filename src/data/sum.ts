import { ICalculate } from '../interfaces/icalculate'

export class Sum implements ICalculate {
  Act(a: number, b: number): number {
    return a - b
  }
}
