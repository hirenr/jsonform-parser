export interface JsonSchema {
  title?: string;
  type: "object";
  required?: string[];
  properties: Record<string, JsonSchemaProperty>;
}

export interface JsonSchemaProperty {
  type?: string;
  format?: string;
  enum?: string[];
  title?: string;
  [key: string]: any;
}
