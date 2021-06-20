const emptyFile = "export default {}"
const emptyFileName = "\0rollup_plugin_ignore_empty_module_placeholder"

function ignore(list, options = {}) {
  return {
    resolveId(importee) {
      return importee === emptyFileName ||
        list.includes(importee) ||
        (options.commonjsBugFix &&
          list.includes(importee.replace(/^\0/, "").replace(/\?commonjs-proxy$/, "")))
        ? emptyFileName
        : null
    },
    load(id) {
      return id === emptyFileName ? emptyFile : null
    },
  }
}

module.exports = ignore
ignore.default = ignore
