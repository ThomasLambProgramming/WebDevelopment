import React from 'react';

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

export default function App() {
  //Put react fragment in so that there isnt an extra div for no reason when i added a second one.
  return (
    <React.Fragment>
      <div className="mx-auto my-8 mt-10 w-5/6 rounded border border-red-200 p-4 shadow-inner dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
        <h1 className="mb-4 text-center text-4xl">Welcome</h1>
        <p className="my-4 text-center">
          <em>Minimal, fast, sensible.</em>
        </p>
        <p className="my-4 ml-20 text-left">
          Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
          <Link href="https://reactjs.org/">React</Link>,{' '}
          <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
          <link></link>
          <Link href="https://tailwindcss.com/">wind</Link>.
        </p>
        <p className="my-4 ml-20">
          Change{' '}
          <code className="border-1 2py-1 rounded border border-pink-500 bg-neutral-100 px-1 font-mono text-pink-500 dark:border-pink-400 dark:bg-neutral-700 dark:text-pink-400">
            src/App.tsx
          </code>{' '}
          for live updates.
        </p>
      </div>

      <div className="mx-auto grid w-5/6 grid-cols-2 border-4">
        <div className="rounded-sl my-10 ml-8 w-5/6 border-2 border-solid hover:border-dotted">
          <p className="text-center">This is a test</p>
        </div>
        <div className="rounded-sl my-10 ml-4 w-5/6 border-2 border-solid hover:border-dotted">
          <p className="text-center">This is a test</p>
        </div>
      </div>
    </React.Fragment>
  );
}
