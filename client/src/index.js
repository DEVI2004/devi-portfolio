import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { DataProvider } from './components/context/GlobalContext';


// Get the root element from the DOM
//const rootElement = document.getElementById('root');

// // Create a root
// const root = createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<BrowserRouter>
  <React.StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>
  //</BrowserRouter>
  
  //document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


