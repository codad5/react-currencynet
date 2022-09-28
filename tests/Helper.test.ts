import { output_display, shorten_number } from '../src/components/Helpers'

test('Currency Shortener should work fine', () => {
  expect(shorten_number(1000000, 0)).toBe('1M')
})
test('Currency Shortener should work fine', () => {
  expect(shorten_number(1000000, 2)).toBe('1.00M')
})
test('Output to workfine', () => {
  expect(
    output_display(
      {
        currency: 'USD',
        rate: 1,
        symbol: '$',
        value: 1000000,
      },
      1000000,
      false,
      true,
    ),
  ).toBe('$1M')
})
