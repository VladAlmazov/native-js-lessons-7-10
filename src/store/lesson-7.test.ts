import {calculator, sum} from './lesson-7';

test('sum should be correct', () => {
    const a = 15;
    const b = 15;

    const result = sum(a, b)

    expect(result).toBe(30)
})
test('calculating should be correct', () => {
    const a = 5;
    const b = 5;

    const result = calculator(a, b, {type: 'sub'})

    expect(result).toBe(0)
})