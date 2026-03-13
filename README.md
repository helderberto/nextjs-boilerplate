# Next.js Boilerplate

A minimal boilerplate to quick start new projects with Next.js, TypeScript, and modern tooling.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with Turbopack
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- CSS Modules
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook 10](https://storybook.js.org/)
- [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)
- [Commitlint](https://commitlint.js.org/)

## Getting Started

```bash
npx create-next-app -e https://github.com/helderburato/nextjs-boilerplate
```

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start dev server (Turbopack) |
| `npm run build`      | Production build             |
| `npm start`          | Start production server      |
| `npm test`           | Run tests                    |
| `npm run test:watch` | Run tests in watch mode      |
| `npm run lint`       | Run ESLint                   |
| `npm run format`     | Format with Prettier         |
| `npm run storybook`  | Start Storybook              |
| `npm run generate`   | Scaffold a new component     |

## Component Generator

Generate a new component with all boilerplate files:

```bash
npm run generate
```

This creates:

- `index.tsx` - Component
- `ComponentName.module.css` - Styles
- `stories.tsx` - Storybook story
- `test.tsx` - Test file

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/).

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
