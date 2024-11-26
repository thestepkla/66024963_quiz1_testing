const calculateOfRisk = require('./calculate');

describe('fail of input', () => {
    test('input type is not a number', () => {
        expect(calculateOfRisk('abc', 123)).toBe('Invalid input type is not a number');
    });

    test('input value is negative', () => {
        expect(calculateOfRisk(-50, 50)).toBe('Invalid input value is negative');
    });
});

describe('test of risk', () => {
    test('general', () => {
        expect(calculateOfRisk(90, 100)).toBe('general');
    });

    test('risk', () => {
        expect(calculateOfRisk(139, 124)).toBe('risk');
    });

    test('High risk level 1', () => {
        expect(calculateOfRisk(158, 153)).toBe('High risk level 1');
    });

    test('High risk level 2', () => {
        expect(calculateOfRisk(160, 155)).toBe('High risk level 2');
    });

    test('High risk level 3', () => {
        expect(calculateOfRisk(180, 183)).toBe('High risk level 3');
    });
});