const { evaluateActions } = require('./solution');

describe('Constraint test', () => {

    test('should throw an error if empty string', () => {
        expect(() => evaluateActions('')).toThrow('The input must contain between 1 and 1,000,000 charecters');
    });

    test('should throw an error if not string type', () => {
        expect(() => evaluateActions(12345)).toThrow();
    });

    test('should throw an error if contain invalid character', () => {
        expect(() => evaluateActions('SDRCS')).toThrow();
    })

});

describe('Test case', () => {

    describe('Good boy case', () => {

        test('input "SRSSRRR", should return "Good boy"', () => {
            expect(evaluateActions('SRSSRRR')).toBe('Good boy');
        })

        test('input "SSRSRRR", should return "Good boy"', () => {
            expect(evaluateActions('SSRSRRR')).toBe('Good boy');
        })

    });

    describe('Bad boy case', () => {

        test('input "RSSRR", should return "Bad boy"', () => {
            expect(evaluateActions('RSSRR')).toBe('Bad boy');
        })

        test('input "SSSRRRRS", should return "Bad boy"', () => {
            expect(evaluateActions('SSSRRRRS')).toBe('Bad boy');
        })

        test('input "SRRSSR", should return "Bad boy"', () => {
            expect(evaluateActions('SRRSSR')).toBe('Bad boy');
        })

    });
});