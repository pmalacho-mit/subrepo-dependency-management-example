import { add, subtract, multiply } from "./index";
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiplies 3 * 4 to equal 12", () => {
  expect(multiply(3, 4)).toBe(12);
});
