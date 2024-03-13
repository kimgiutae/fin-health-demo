# Fin-Health-Demo

Hi, my name is Jonathan Kim, and this is a prototype SPA made for an assessment for "FreeTheFreela".

The app is a financial health data visualization tool, that shows a fictional company latest data, like revenue, expenses and balance.

The app integrate mainly a chart and a table, that can be easly extended by the sidebar.

## Main tech used

This is not an exhaustive list (More info in package.json):

- create-react-app
- ChakraUI
- TanStack react-query
- TypeScript
- chart.js

With this, I created some functionality to improve the UX:

- Suspense and skeletons for beautiful eye-candy loaders
- Lazy load for heavy components (like MainChart)
- debounce/throttle (lodash) for optimized func calls
- react-query for unifying the data queries (and cache) all over the app

The main visualization tool I used was chart.js, that provided a very fluid HTML5 canvas rendering with crystal clear text, lines and integrated animations.

## Observations

**First of all. I had to code in a hurry. I was in vacations :D.**

I used the tooling recommended by the assessment, also to show that I can adapt myself to any project client requirements. If the concepts are clear, a good dev can make a good app with almost any stack.

But I have 2 recommendations to improve UX and also DX:

- Replace CRA with something more robust, modern and stable, like Next.js or Remix. BTW, the official react website recommend this for any new project. The future trend is to CRA being finally deprecated.
- Replace ChakraUI with TailwindCSS coupled with a UI System built over it, like ShadcnUI or HeadlessUI. Utility CSS proved (over years) to be better for big-scale apps. Also CSS-in-JS adds a lot of runtime overhead (more JS to client = heavier apps) that can causes crashes and errors hard to follow.

Also, I could have used some React component for charts out-of-the-box, but I wanted to show my skills with react core concepts (like context, refs, memoization and states) using the chart.js lib and integrate it with react myself.

I couldn't use Redux, cause lack of time. But context is good enough for rapid-prototyping.

## Pending

Some (short-term) to-dos to improve app overall:

- Create mock server to create more "realistic" data and easly port to other invironments.
- Better understandment of client visualization goals (the assessment was little vague).
- More testing.

## How to run

Simple clone the repo, install deps in local, and run command: "npm start".

Requires node.js at least v16.

## How to test

I'm using Playwright to E2E testing in the main 3 browsers.

To test, run command: "npm run windows-test" (for windows environment), or "npm run unix-test" (for UNIX environment).

If the app is already running (in localhost 3000 port), just run command: "npm test".
