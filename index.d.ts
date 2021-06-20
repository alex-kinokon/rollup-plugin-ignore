import { Plugin } from "rollup"

export = ignore
declare function ignore(
  list: string[],
  options?: {
    commonjsBugFix?: boolean
  }
): Plugin
