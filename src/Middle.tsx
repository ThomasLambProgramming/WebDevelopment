import React from 'react';

const Middle = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Middle;
