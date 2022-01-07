import type MarkdownIt from "markdown-it/lib"
import quizmd from "quizmd"

/**
 * A plugin that adds quizmd support
 */
export default function quizmd_plugin(md: MarkdownIt): void {
  const defaultRenderer = md.renderer.rules.fence?.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, opts, env, self): string => {
    const token = tokens[idx]
    const code = token.content.trim()
    if (token.info.trim() === "quizmd") {
      return `<div class="quizmd" quizmd-processed="true">${quizmd.parse(
        code.split("\r?\n")
      )}</div>\n`
    }
    if (defaultRenderer) {
      return defaultRenderer(tokens, idx, opts, env, self)
    }
    return ""
  }
}
