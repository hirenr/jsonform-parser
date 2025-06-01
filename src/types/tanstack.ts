export interface ParsedField {
  name: string;
  label: string;
  type?: string;
  inputType: "text" | "email" | "number" | "checkbox" | "select" | "json";
  required: boolean;
  fallback: boolean;
  options?: string[];
}
