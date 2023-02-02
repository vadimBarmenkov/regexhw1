import {Validator} from "../src/js/Validator";
let validator = new Validator();

test('validator test 1', () => {
    expect(validator.validateUsername('user12_ht-v')).toBe(true);
})

test('validator test 2', () => {
    expect(validator.validateUsername('user12_ht-')).toBe(false);
})

test('validator test 3', () => {
    expect(validator.validateUsername('user12_ht_')).toBe(false);
})

test('validator test 4', () => {
    expect(validator.validateUsername('user12_ht-v9')).toBe(false);
})

test('validator test 5', () => {
    expect(validator.validateUsername('1user12_ht-v')).toBe(false);
})

test('validator test 6', () => {
    expect(validator.validateUsername('user1234_ht-v')).toBe(false);
})
