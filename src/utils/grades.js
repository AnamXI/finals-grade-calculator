export const validateScore = (score) => {
    const num = Number(score);
    return Number.isFinite(num) && num >= 0 && num <= 100;
};

// Transmutation sample
export const getTransmutedGrade = (average) => {
    if (average >= 90) return 4.0;
    if (average >= 80) return 3.5;
    if (average >= 70) return 3.0;
    if (average >= 65) return 2.5;
    if (average >= 60) return 2.0;
    if (average >= 55) return 1.5;
    if (average >= 50) return 1.0;
    return 0.0;
};

export const computeWeightedGrade = (activities, performance, midterm, finals) => {
    // Weights: Activities 30%, Performance 30%, Midterm 20%, Finals 20%
    const validAct = validateScore(activities) ? Number(activities) : 0;
    const validPerf = validateScore(performance) ? Number(performance) : 0;
    const validMid = validateScore(midterm) ? Number(midterm) : 0;
    const validFin = validateScore(finals) ? Number(finals) : 0;

    // If nothing is entered, return 0
    if (validAct === 0 && validPerf === 0 && validMid === 0 && validFin === 0) {
        return { average: 0, transmuted: 0.0 };
    }

    const finalAverage =
        (validAct * 0.30) +
        (validPerf * 0.30) +
        (validMid * 0.20) +
        (validFin * 0.20);

    const roundedAverage = Math.round(finalAverage * 100) / 100;

    return {
        average: roundedAverage,
        transmuted: getTransmutedGrade(roundedAverage)
    };
};