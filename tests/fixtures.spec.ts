/* eslint-disable jest/valid-title */
import fs from "fs"
import MarkdownIt from "markdown-it"
import quizmd_plugin from "../src"

/** Read a "fixtures" file, containing a set of tests:
 *
 * test name
 * .
 * input text
 * .
 * expected output
 * .
 *
 * */
function readFixtures(name: string): string[][] {
  const fixtures = fs.readFileSync(`tests/fixtures/${name}.md`).toString()
  return fixtures.split("\n.\n\n").map(s => s.split("\n.\n"))
}

describe("Parses basic", () => {
  readFixtures("basic").forEach(([name, text, expected]) => {
    const markdownIt = MarkdownIt().use(quizmd_plugin)
    const rendered = markdownIt.render(text)
    it(name, () => expect(rendered).toEqual(`${expected}\n`))
  })
})
