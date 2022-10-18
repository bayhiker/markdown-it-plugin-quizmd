import type MarkdownIt from "markdown-it/lib"
import { quizmd, kvparse } from "quizmd"
import type { QuizMdParserOptions, QuizMdVariables, KvPairs } from "quizmd"

type QuizMdPluginOptions = {
  variables: QuizMdVariables
  parserOptions: QuizMdParserOptions
}

/**
 * A plugin that adds quizmd support
 */
export default function quizmd_plugin(
  md: MarkdownIt,
  quizMdPluginOptions: QuizMdPluginOptions = { variables: {}, parserOptions: {} }
): void {
  const defaultRenderer = md.renderer.rules.fence?.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, opts, env, self): string => {
    const token = tokens[idx]
    const code = token.content.trim()
    const matches = token.info.match(/^\s*quizmd(\s+.*?)?$/i)
    if (matches) {
      const quizMdBlockOptions: KvPairs = kvparse(matches[1])
      return `<div class="quizmd" quizmd-processed="true">${quizmd.parse(
        code.split(/\r?\n/),
        quizMdPluginOptions.variables,
        { ...quizMdPluginOptions.parserOptions, ...quizMdBlockOptions }
      )}</div>\n`
    }
    return defaultRenderer ? defaultRenderer(tokens, idx, opts, env, self) : ""
  }
}
