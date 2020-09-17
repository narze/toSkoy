# Thank u, Next.js

Bootstrap a developer-friendly (?) NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [Husky](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Tailwind CSS](https://tailwindcss.com)
- [Chakra](https://chakra-ui.com), a React component library
- [Emotion](https://emotion.sh)
- [`@tailwindcssinjs/macro`](https://github.com/Arthie/tailwindcssinjs) It injects Tailwind CSS into Emotion styled component, so PurgeCSS is not needed in this setup.
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [Cypress](http://cypress.io/) and [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library)
- [Storybook](https://storybook.js.org)

This template is built from [examples/with-tailwindcss-emotion](https://github.com/vercel/next.js/blob/canary/examples/with-tailwindcss-emotion/README.md) & [examples/with-typescript-eslint-jest](https://github.com/vercel/next.js/blob/canary/examples/with-typescript-eslint-jest/README.md) then added some more sensible packages.

## Development Workflow

This boilerplate is carefully built to make TDD workflow in frontend development possible, as you can see a bunch of testing libraries included.

### Test-first

Before adding features (components, pages, etc.) you add tests in at least one level:

- Unit Tests : Jest
- Integration / e2e Tests : Cypress
- UI Tests : Storybook

You can add `pending` tests if the feature is difficult or cannot figure out yet how to test (eg. authentication with Firebase, which is hard to mock)
But make sure that you cleanup pending tests quickly before it goes out of control and leaves you with low test coverage.

[rant]
You (and your team) will be thankful for the tests later when you decide to refactor or add/switch dependencies, like updating dependencies, switching to Preact, adopting Recoil, trying out the next Next.js, and so on.
Well tested codebase will save you from [Javascript Fatigue](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) no matter how large or small your project is.
[/rant]

### Static Analysis

[Husky](https://github.com/typicode/husky) will lint & format the code before commit & push, so the code will be cleaner & easier for review (But please don't add `any` type everywhere)

### CI

Github Actions will run all the tests. [See configuration](./.github/workflows/nodejs.yml)

## Projects built with this template

- https://github.com/narze/typeland

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/narze/thank-u-nextjs)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/narze/thank-u-nextjs my-app
# or
yarn create next-app --example https://github.com/narze/thank-u-nextjs my-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
