//NEW PROJECT
// npx create-react-app my-app --template typescript
// or
// yarn create react-app my-app --template typescript

//ADDING TYPESCRIPT TO EXISTING PROJECT
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// or
// yarn add typescript @types/node @types/react @types/react-dom @types/jest


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
