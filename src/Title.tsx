import React from 'react';

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

const Title = () => {
  return (
    <React.Fragment>
      <div className="mx-auto my-8 mt-10 w-5/6 rounded border border-red-200 p-4 shadow-inner dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
        <h1 className="mb-4 text-center text-4xl">
          Welcome To what will be a mistake in learning probably lmao
        </h1>
        <p className="my-4 text-center">
          <em>
            This is the first of what i will make with css, vim, tailwind, react
            and vite. Your whalecum
          </em>
        </p>
        <p className="my-4 ml-20 text-left text-center">
          Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
          <Link href="https://reactjs.org/">React</Link>,{' '}
          <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
          <link></link>
          <Link href="https://tailwindcss.com/">wind</Link>.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Title;
