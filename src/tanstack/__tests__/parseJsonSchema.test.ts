import { parseJsonSchema } from "../parseJsonSchema";

describe("parseJsonSchema", () => {
  it("parses a basic schema", () => {
    const result = parseJsonSchema({
      title: "Test",
      type: "object",
      required: ["email"],
      properties: {
        email: { type: "string", format: "email", title: "Email" },
        age: { type: "number", title: "Age" },
        active: { type: "boolean", title: "Active" }
      }
    });

    expect(result.email.inputType).toBe("email");
    expect(result.age.inputType).toBe("number");
    expect(result.active.inputType).toBe("checkbox");
  });
});
