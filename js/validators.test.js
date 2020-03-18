import {
    validateName,
    validateConfirmPassword,
    validateEmail
} from './validators';
import { checkIfEmpty } from './utilityFunctions';

let result;

test('validateName()', () => {
    result = validateName('John Doe');
    let expectedResult = {valid: true, error:  'Must not be empty' };
    expect(result).not.toEqual(expectedResult);

    result = validateName(' ');
    expectedResult = {valid: false, error:  'Must not be empty' };
    expect(result).toEqual(expectedResult);

});

test('validateConfirmPassword()', () => {
    result = validateConfirmPassword('123456a', '1234567a');
    let expectedResult = {valid: false, error:  'Passwords must match' };
    expect(result).toEqual(expectedResult);

});

test('validateEmail()', () => {
    result = validateEmail('john@email');
    let expectedResult = {valid: false, error:  'Must be a valid email address' };
    expect(result).toEqual(expectedResult);

});