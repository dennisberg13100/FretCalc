
import { scale25in, scale650mm } from "../fixtures/fretPositions";
import {
  calculateAllFretPositions,
  calculateFretAbsolutePosition,
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

describe("calculateAllFretPositions", () => {
  it("calculates all positions for a 650 mm scale", () => {
    const positions = calculateAllFretPositions(650, 22);

    expect(positions).toHaveLength(scale650mm.length);

    scale650mm.forEach((expected, index) => {
      expect(positions[index].absolute).toBeCloseTo(
        expected.absolute,
        5
      );

      expect(positions[index].relative).toBeCloseTo(
        expected.relative,
        5
      );
    });
  });

  it("calculates all positions for a 25 inch scale (635 mm)", () => {
    const positions = calculateAllFretPositions(635, 22);

    expect(positions).toHaveLength(scale25in.length);

    scale25in.forEach((expected, index) => {
      expect(positions[index].absolute).toBeCloseTo(
        expected.absolute,
        5
      );

      expect(positions[index].relative).toBeCloseTo(
        expected.relative,
        5
      );
    });
  });
});
