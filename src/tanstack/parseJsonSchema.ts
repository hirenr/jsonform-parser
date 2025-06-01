import { JsonSchema } from "../types";
import { ParsedField } from "../types/tanstack";

export function parseJsonSchema(schema: JsonSchema): Record<string, ParsedField> {
  const fields: Record<string, ParsedField> = {};

  for (const [name, def] of Object.entries(schema.properties)) {
    const isRequired = schema.required?.includes(name) ?? false;

    let inputType: ParsedField["inputType"] = "text";
    let fallback = false;

    if (!def.type) {
      inputType = "json";
      fallback = true;
    } else if (def.type === "string") {
      if (def.enum) inputType = "select";
      else if (def.format === "email") inputType = "email";
      else inputType = "text";
    } else if (["number", "integer"].includes(def.type)) {
      inputType = "number";
    } else if (def.type === "boolean") {
      inputType = "checkbox";
    } else {
      inputType = "json";
      fallback = true;
    }

    fields[name] = {
      name,
      label: def.title || name,
      type: def.type,
      inputType,
      required: isRequired,
      fallback,
      options: def.enum
    };
  }

  return fields;
}
