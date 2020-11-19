import React from 'react';
import { useApp } from './context/AppProvider';
//import ThemeContext from './context/ThemeContext';

const Head = () => {

  //FIRST
  //const color = useContext(ThemeContext);

  //SECOND
  const { state } = useApp();
  return (
    <h1>
      {/* {color} */}
      Example React Context sans Redux -
      {state.title}
    </h1>
  )
};

export default Head;