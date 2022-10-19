# Markdown-It QuizMD Plugin

[Markdown-It](https://github.com/markdown-it/markdown-it) plug in to process [QuizMD](https://github.com/bayhiker/quizmd) blocks. QuizMD uses markdown syntax to write quiz problems. For example, the following section generates a problem with three alternative answers

## Install

> npm install markdown-it-quizmd

## Usage

### As a Node module with typescript:

```typescript
import MarkdownIt from "markdown-it"
import markdownItPluginQuizMd from "markdown-it-quizmd"

const text = MarkdownIt().use(markdownItPluginQuizMd, options).render("*a*")
```

`options` parameter is optional. If defined, it is in the following format:

```javascript
{
    variables: {name1: value1, ...},
    parserOptions: {isSolution: true|false, randomize: true|false}
}
```

where `isSolution` defaults to false, indicating whether you want to generate problems with the right answer hightlighted. `randomize` defaults to false, indicating whether variables should be replaced with random values.

### As a Node module with typescript:

```javascript
var md = require("markdown-it")
var quizMdPlugin = require("markdown-it-quizmd")
md.use(quizMdPlugin, options)
```

### In the browser:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
    <script src="https://cdn.jsdelivr.net/npm/markdown-it@12/dist/markdown-it.min.js"></script>
    <script src="https://unpkg.com/markdown-it-quizmd"></script>
  </head>
  <body>
    <div id="demo"></div>
    <script>
      const text = window.markdownit().use(window.markdownItQuizMd).render("*a*")
      document.getElementById("demo").innerHTML = text
    </script>
  </body>
</html>
```

## Development

### Features

- TypeScript
- Code Formatting ([prettier])
- Code Linting ([eslint])
- Testing and coverage ([jest])
- Continuous Integration ([GitHub Actions])
- Bundled as both UMD and ESM ([rollup])
- Upload as [NPM] package and [unpkg] CDN
- Simple demonstration website ([GitHub Pages])

### Getting Started

1. git clone https://github.com/bayhiker/markdown-it-plugin-quizmd.git
1. Install the `node_module` dependencies: `npm install` or `npm ci` (see [Install a project with a clean slate](https://docs.npmjs.com/cli/v7/commands/npm-ci)).
1. Run code formatting; `npm run format`, and linting: `npm run lint:fix`.
1. Run the unit tests; `npm test`, or with coverage; `npm test -- --coverage`.

## Design choices

### Why is markdown-it only in devDependencies?

From the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md):

> Plugins should not require the `markdown-it` package as a dependency in `package.json`.

Note, for typing, we import this package with `import type`, to ensure the imports are not present in the compiled JavaScript.

### Why Jest?

There are a number of JavaScript unit testing frameworks (see [this comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/), but [jest] was chosen because of it is easy to setup/use, flexible, and well used in large projects.

### Why Rollup?

The three main bundlers are; Webpack, Rollup and Parcel, with the functionality gap between all of these bundlers narrowing over the years.
Essentially, Rollup provides a middle ground between features and complexity, and is good for bundling libraries (it is what `markdown-it` itself [uses](https://github.com/markdown-it/markdown-it/blob/064d602c6890715277978af810a903ab014efc73/support/rollup.config.js)).

See for example:

- <https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3>
- <https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd>
- <https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9>

[ci-badge]: https://github.com/executablebooks/markdown-it-plugin-template/workflows/CI/badge.svg
[ci-link]: https://github.com/executablebooks/markdown-it--plugin-template/actions
[npm-badge]: https://img.shields.io/npm/v/markdown-it-plugin-template.svg
[npm-link]: https://www.npmjs.com/package/markdown-it-plugin-template
[github actions]: https://docs.github.com/en/actions
[github pages]: https://docs.github.com/en/pages
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[jest]: https://facebook.github.io/jest/
[rollup]: https://rollupjs.org
[npm]: https://www.npmjs.com
[unpkg]: https://unpkg.com/
