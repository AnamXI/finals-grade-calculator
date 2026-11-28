import { computeWeightedGrade, getTransmutedGrade, validateScore } from './grades';

describe('Grade Calculator Logic', () => {
    test('computes correct weighted average for perfect scores', () => {
        const result = computeWeightedGrade(100, 100, 100, 100);
        expect(result.average).toBe(100);
        expect(result.transmuted).toBe(4.0);
    });

    // // Transmutations
    // test('allows a passing grade even with a failing exam score', () => {
    //     // Act: 80 (30%) = 24
    //     // Perf: 80 (30%) = 24
    //     // Mid: 80 (20%) = 16
    //     // Fin: 0 (20%) = 0
    //     // Total average = 64 -> Transmuted 2.0 (1.0 passing)
    //     const result = computeWeightedGrade(80, 80, 80, 0);
    //     expect(result.average).toBe(64);
    //     expect(result.transmuted).toBe(2.0);
    // });

    // test('returns 0 average and failing grade if no scores are entered', () => {
    //     const result = computeWeightedGrade('', '', '', '');
    //     expect(result.average).toBe(0);
    //     expect(result.transmuted).toBe(0.0);
    // });

    // test('transmutes boundary correctly (90 becomes 4.0, 49.9 becomes 0.0)', () => {
    //     expect(getTransmutedGrade(90)).toBe(4.0);
    //     expect(getTransmutedGrade(49.9)).toBe(0.0);
    // });

    // test('rejects scores below 0 or above 100', () => {
    //     expect(validateScore(-5)).toBe(false);
    //     expect(validateScore(105)).toBe(false);
    //     expect(validateScore(50)).toBe(true);
    // });
});