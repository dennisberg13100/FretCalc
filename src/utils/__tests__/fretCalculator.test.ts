
import {
  calculateFretAbsolutePosition,
  calculateAllFretPositions,
} from "../fretCalculator";

describe("calculateFretAbsolutePosition", () => {
  it("Calculate the first fret position", () => {
    const result = calculateFretAbsolutePosition(647.7, 1);

    expect(result).toBeCloseTo(36.35, 2);
  });
});

describe("calculateAllFretAbsolutePositions", () => {
  it("returns the correct number of fret positions", () => {
    const positions = calculateAllFretPositions(647.7, 22);

    expect(positions).toHaveLength(22);
  });

  it("sets the first relative distance equal to its absolute position", () => {
    const positions = calculateAllFretPositions(647.7, 22);

    expect(positions[0].relative).toBe(positions[0].absolute);
  });

  it("calculates the relative distance from the previous fret", () => {
    const positions = calculateAllFretPositions(647.7, 22);

    expect(positions[1].relative).toBeCloseTo(
      positions[1].absolute - positions[0].absolute,
      10
    );
  });
});
