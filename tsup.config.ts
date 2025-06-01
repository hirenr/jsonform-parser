import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tanstack/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  clean: true,
});
