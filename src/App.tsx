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

      <div className="mx-auto grid w-5/6 grid-cols-2 border-4">
        <button className="my-10 ml-8 w-5/6 rounded-xl border-2 border-solid hover:border-dotted hover:bg-slate-600 focus:border-dotted">
          <p className="text-left">I want to place a ditto here</p>
        </button>
        <button className="my-10 ml-4 w-5/6 rounded-xl border-2 border-solid focus:border-dotted">
          <p className="mx-10 text-center">
            I want to have some sort of dark mode here
          </p>
        </button>
      </div>
      <label className="Grouper">
        <input
          className="focus:ring-3 h-20 w-4 rounded border border-red-800"
          required
          type="checkbox"
          value=""
        ></input>
      </label>
      <p className="my-40">Gap</p>
      <p className="mx-10 mt-10 text-center">
        I want to have some sort of dark mode here. For the future stuff that I
        want to add, is a possible storage cart, an api call. Separated
        components that change Depending on different state shit. Eg change all
        the class variables with buttons on top. such as a grid of buttons that
        then change all buttons to be flat, rounded etc.
      </p>
      <p className="mx-10 mt-10 text-center">
        vim is also being alot of fun! Other stuff that might be helpful is
        making a small blog and getting that data from a github repo or
        something similar with markdown. Gray matter is the npm package that
        will help with that alot as it will do the markdown conversion for me!
      </p>

      {/* <p>
        Let, const, () => {} functions
        Exports imports
        ...Spread when ...array
        and (...args) will merge many args into an array
        [var1, var2] = array
        {name} = {name: "tim", age:28} will grab name
        array.map((element) => {value of some kind})
        {} is for a javascript expression that returns a value.

        <Component name="50" Name={value} ></Component>
        in the component give it the props argument then use props.whatever the input was (i think for typescript this changes but still)

        The component drilling and shit is straightforward and lets be honest dont overthink it, it doesnt matter if how we do it is wrong.


        Wrapper components
        function Card(props)
        {
          const classes = 'default ' + props.className;
          return <div className={classes}>{props.children}</div>;
        }
        this is for removing repeated classname stuff (possibly javascript but im not too sure.)
        everything gets children in props as a default (unless its a "pure functional with no children argument")

        ..\ is for back
        .\ is for same folder

        Proper component function declaration (pretty sure its better for the this stuff since its self contained or whatever the fuck)
        const var = () => {
        }

        javascript events have all different shit to apply conditional stuff to https://www.w3schools.com/js/js_events.asp
        <button onClick={} onDragEnter={}></button>
        which we can then put handlers on and etc.
        a handler can just be a () => {} or it can just be a function reference {functionName} dont put () at the end of the function or it will just call itself


        //const [newvalue, SetNewValue] = useState('Hello there');
      </p> */}
    </React.Fragment>
  );
}
