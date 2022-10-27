import React from 'react';

interface props {
  var1: string;
  var2: string;
}

const Title2 = (props: props) => {
  return (
    <React.Fragment>
      {props.var1}
      {props.var2}
    </React.Fragment>
  );
};

export default Title2;
