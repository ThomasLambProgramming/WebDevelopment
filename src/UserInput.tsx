import React from 'react';

const UserInput = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default UserInput;
