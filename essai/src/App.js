import React, { useReducer } from 'react';
//import AppReducer from './context/AppReducer';
import { useApp } from './context/AppProvider';
//import initialState from './context/initialState';
import Head from './Head';
import './Style.css';

const App = () => {

  //FIRST
  //const [state, dispatch] = useReducer(appReducer, initialState); 
  //appeler un useReducer qui appelle un app reducer sur tous les composants ? #!!NON
  // console.log("state : ", state);

  //SECOND
  const { state, dispatch } = useApp(); // petit custom !
  const { firstname, lastname } = state.form;
  console.log(state);

  const onChange = (e) => {
    const { name, value } = e.target;
    return dispatch({ type: 'UPDATE_FIELD', payload: { key: name, value: value } })
  };

  return (
    <div className="App">
      <Head />
      <input
        name="firstname"
        placeholder="Firstname"
        value={firstname}
        onChange={onChange}
      />
      <input
        name="lastname"
        placeholder="Lastname"
        value={lastname}
        onChange={onChange}
      />
      <br />
      couunt : {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

export default App;
