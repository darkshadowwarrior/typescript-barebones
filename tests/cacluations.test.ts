import { Sum } from '../src/data/sum'
import { Add } from '../src/data/add'

test('adds 1 + 2 to equal 3', () => {
  expect(new Add().Act(1, 2)).toBe(3)
})

test('subtracts 1 from 2 to equal 1', () => {
  expect(new Sum().Act(2, 1)).toBe(1)
})
