# Intro to babel AST

[Sebastian McKenzie](https://twitter.com/sebmck) created Babel when he was 18 years old.
More about [his story](https://medium.com/@sebmck/2015-in-review-51ac7035e272).

[Babel](https://babeljs.io/) is a javascript compiler. It compiles JS to JS.

[How does it work](https://www.sitepoint.com/understanding-asts-building-babel-plugin/)?

* source code: [parse](https://github.com/babel/babylon) -> source AST
* source AST: [transform](https://www.npmjs.com/package/babel-traverse) -> target AST
* target AST: [generate](https://www.npmjs.com/package/babel-generator) -> target code

## Custom transformer example

```js
// from
console.log(a + 1);

// to
console.log("Custom logger", a + 1);
```

Let's setup transformer and tests:

* [transformer](test/index.js)
* [test](test/fixtures/consolePrefix)
* [`transformFileSync` API](https://babeljs.io/docs/core-packages/)

Run the watch

```bash
yarn watch
```

Resources:

* [babel plugin handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md)
* [AST types](https://babeljs.io/docs/core-packages/babel-types/#api)
* [visitors](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#visitors)
* [type definitions](https://github.com/babel/babel/tree/7.0/packages/babel-types/src/definitions)

## Task

We have configuration file and want to generate a separate JS bundle with hardcoded values for each environment.

```js
// from
const appToken = __config('appToken');

// to
const appToken = 'ENVIRONMENT_APP_TOKEN';
```

Lets use [AST explorer](https://astexplorer.net/) to look at the AST. Use `babylon6` parser.

```js
var a = 5, b = 3;
const appToken = __config('appToken');
console.log(appToken);
```

### Steps

* pass variables as options
* find the `__config` invocations
* replace `__config('variableName')` with values, e.g. `'VALUE'`

## How do I add it to a project?

Look at the [babel-plugin-i18n-replace](https://github.com/astrauka/babel-plugin-i18n-replace) example.

## Want to know more?

Follow the Dan Prince [article](https://www.sitepoint.com/understanding-asts-building-babel-plugin/)
about understanding ASTs.
