import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';
import AppProvider from './src/context/AppProvider';
//import ThemeContext from './context/ThemeContext'

const rootElement = document.getElementById('root');

// FIRST 
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeContext.Provider color={"dark"}>
//       <App />
//     </ThemeContext.Provider>
//   </React.StrictMode>,
//   rootElement
// );

//SECOND
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
