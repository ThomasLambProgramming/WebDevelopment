import React from 'react';
import Middle from './Middle';
import Title from './Title';
import UserInput from './UserInput';

export default function App() {
  //Put react fragment in so that there isnt an extra div for no reason when i added a second one.
  return (
    //This has all been separated to practice making components and calling them.
    <React.Fragment>
      <Title />
      <Middle />
      <UserInput />
    </React.Fragment>
  );
}
