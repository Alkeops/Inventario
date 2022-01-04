import { classGenerator } from "../classGenerator";
const prefix = "test";
const className = "test-other";
const variant = "black";
describe("Test classGenerator", () => {
  test("Debe de retornar solo el prefijo", () => {
    const result = classGenerator({prefix});
    expect(result).toBe("test");
  });
  test("Debe retornar el prefijo y la clase", () => {
    const result = classGenerator({prefix, className});
    expect(result).toBe("test test-other");
  });
  test("Debe retornar el prefijo, la clase y la variante", () => {
    const result = classGenerator({prefix, className, variant});
    expect(result).toBe("test test-other test--black");
  });
});
