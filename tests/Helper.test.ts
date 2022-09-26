import { shorten_number } from '../src/components/Helpers'

test('Currency Shortener should work fine', () => {
  expect(shorten_number(1000000, 0)).toBe('1M')
})
