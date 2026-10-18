export interface FretPosition {
    absolute: number
    relative: number
}

export function calculateFretAbsolutePosition(
    saceleLength: number,
    fretNumber: number
) : number {
    return saceleLength * (1 - Math.pow(2, - fretNumber/12))
}

export function calculateAllFretPositions(
    saceleLength: number,
    fretCount: number
): FretPosition[] {
    const positions: FretPosition[] = []

    for (let n = 1; n <= fretCount; n++) {
        const absolute = calculateFretAbsolutePosition(saceleLength, n)
        const relative = n === 1 
            ? absolute
            : absolute - positions[n - 2].absolute // -2 pq arrays começam em 0 e nós começamos em 1 na nossa contagem 
        positions.push({absolute, relative})
    }

    return positions
}