const fs = require("fs")
const { rollup } = require("rollup")

async function main() {
  const bundle = await rollup({
    input: "./test/input.js",
    plugins: [require("../")(["fs"])],
  })

  const { output } = await bundle.generate({ format: "cjs" })
  const code = output[0].code
  const target = fs.readFileSync("./test/output.js", "utf8")
  if (target !== code) {
    throw new Error("Test failed. Output: " + code)
  }
}

main()
