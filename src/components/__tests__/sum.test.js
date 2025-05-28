import { sum } from "../sum";

test("Sum function to sum the two numbers", () => {
  const result = sum(4, 6);

  // Assertion
  expect(result).toBe(10);
});
