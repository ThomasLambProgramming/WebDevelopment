import React from 'react';
import Middle from './Middle';
import Title from './Title';
import Title2 from './Testing';
import UserInput from './UserInput';

export default function App() {
  return (
    <React.Fragment>
      <Title var1="adw" var2="dawd" />
      <Title2 var1="adw" var2="dawd" />
      <Middle />
      <UserInput />
    </React.Fragment>
  );
}

// You can do bool conditional && result jsx or whatever to run
// that is a normal javascript thing its a bit stupid but somewhat interesting
// Set state does the

// const [variable, setVariable] = SetState(initialValue);
//
