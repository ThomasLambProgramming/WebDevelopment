import React from 'react';

interface props {
  var1: string;
  var2: string;
}

const Title = ({ var1, var2 }: props) => {
  return (
    <React.Fragment>
      {var1}
      {var2}
    </React.Fragment>
  );
};

const Title2 = (props: props) => {
  return (
    <React.Fragment>
      {props.var1}
      {props.var2}
    </React.Fragment>
  );
};

export default Title2;
