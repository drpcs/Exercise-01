import {printIntegers} from './application.js';

describe('Exercise 01 - printIntegers', () => {

    test('Testing invalid start parameter', () => {
        try {
            printIntegers('a',10);
        } catch(error){
            expect(error).toEqual(`Invalid start parameter`);
        }
    });     

    test('Testing invalid end parameter', () => {
        try {
            printIntegers(5,'a');
        } catch(error){
            expect(error).toEqual(`Invalid end parameter`);
        }
    });      

    test('Testing integer', () => {
        const input = printIntegers(1,1);
        const output = [1];
        expect(input).toEqual(output);
    });  

    test('Testing start value higher than the end value', () => {
        try {
            printIntegers(11,10);
        } catch(error){
            expect(error).toEqual(`The Start parameter can't be higher than the end parameter`);
        }
    });  

    test('Testing negative value', () => {
        const input = printIntegers(-5,5);
        const output = ['Nuts', -4,'Visual', -2, -1, 0, 1, 2, 'Visual', 4, 'Nuts'];
        expect(input).toEqual(output);
    });   

    test('Testing divisible by 3', () => {
        const input = printIntegers(3,3);
        const output = ['Visual'];
        expect(input).toEqual(output);
    });
    
    test('Testing divisible by 5', () => {
        const input = printIntegers(5,5);
        const output = ['Nuts'];
        expect(input).toEqual(output);
    });

    test('Testing divisible by 3 and 5', () => {
        const input = printIntegers(105,105);
        const output = ['Visual Nuts'];
        expect(input).toEqual(output);
    });

    test('Testing (1,15)', () => {
        const input = printIntegers(1,15);
        const output = [
            1,             2,
            'Visual',      4,
            'Nuts',        'Visual',
            7,             8,
            'Visual',      'Nuts',
            11,            'Visual',
            13,            14,
            'Visual Nuts'
        ]
        expect(input).toEqual(output);
    });
});