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
// List stuff needs keys so react knows what has changed and stops rerenders for no reason.

// Setvariablestatefunction((previousState) => {return {javascriptobject or whatever};});
// This make sure that the previous state is always the actually accurate one because react will give the most recent version if
// we pass in a function instead of just a set it to whatever.

// const submitHandler (event) => {event.preventDefault();}
// This is an event handler like on click and etc. we can get the event data automaticcaly from javascript
// putting prevent default stops its default such as form submitting reloading the webpage.

// {<ReactDom.createPortal(jsx, document.getElementById(id of html element))}
// Example = function() => {return ({ReactDom.createPortal(<div onClick={function} />, document.getElementById('title'))})}

// cosnt variableName = useRef();
// <div ref={variableName} />
// This will make the useref keep a reference to that html element, it contains the current prop
// that we can see the data that the html element has good for input, (we can set data for it as well)
// but avoid that if possible because its bad practice.

/*
a side effect in react is anything that is outside of react itself such as http requests because 
it is not affected/ could affect react in a way without react wanting to such as http requests taking too long
we use the useEffect hook to manage this stuff so it doesnt cause infinite loops and shit
useEffect(() => {}, [dependiences]) run function given when dependiences change.







section 10, 12, 14 15, 16, 20-21-22-23-24-27


*/
