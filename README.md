# rollup-plugin-ignore

Prevent a module from showing up in the output bundle. You will get `export default {}` instead.

## Installation

```
npm install --save-dev rollup-plugin-ignore
yarn add rollup-plugin-ignore --dev
```

## Usage

Let’s say you want to prevent `fs` and `net` from being bundled:

```javascript
import ignore from "rollup-plugin-ignore"

export default {
  input: "main.js",
  plugins: [ignore(["fs", "net"])],
}
```

To ignore all built-in Node.js modules, use the following:

```javascript
import { builtinModules } from "module"
import ignore from "rollup-plugin-ignore"

export default {
  input: "main.js",
  plugins: [
    ignore(builtinModules),
  ],
}),
```

**Note:** If you are having problems with using `@rollup/plugin-commonjs` with this plugin, try
the temporary fix:

```javascript
ignore(builtinModules, { commonjsBugFix: true })
```

## License

MIT
