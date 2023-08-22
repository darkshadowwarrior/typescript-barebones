import { ICalculate } from '../interfaces/icalculate'

export class Add implements ICalculate {
  Act(a: number, b: number): number {
    return a + b
  }
}
