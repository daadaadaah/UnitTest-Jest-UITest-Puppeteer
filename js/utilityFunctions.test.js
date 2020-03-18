import {
    isEmpty,
    checkIfEmpty,
    setValidationRes
} from './utilityFunctions';

let result;

test('Dummy Test', () => {
    result = 2 * 3;
    expect(result).toBe(6);
    result = true;
    expect(result).toBe(true);
    
})

test('isEmpty()', () => {
    result = isEmpty('');
    expect(result).toBeTruthy(); // toBeTruthy : 검증 대상이 true 로 간주되면, 테스트 통과임

    result = isEmpty(' ');
    expect(result).toBeFalsy(); // toBeFalsy : 검증 대상이 false 로 간주되면, 테스트 통과임
    
})


test('checkIfEmpty()', () => {
    result = checkIfEmpty(' '); // {valid: false, error:  'Must not be empty' }
    let expectedResult = {valid: false, error:  'Must not be empty' };
    expect(result).toEqual(expectedResult);
    
    result = checkIfEmpty('John Doe');
    expectedResult = {valid: true};
    expect(result).toEqual(expectedResult);

    result = checkIfEmpty('John');
    expect(result.error).toBeUndefined(); // only undefined
})
