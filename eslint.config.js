//touch eslint.config.js;
// If your project does not specify "type":"module" in its package.json file, then eslint.config.js must be in CommonJS format, such as:

// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},

	{
		ignores: ["tests/*"],
		rules: {
			"no-console": "error",
		},
	},
]);
