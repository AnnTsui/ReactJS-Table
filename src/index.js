import React, { Component } from 'react';
//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import ReactTable from "react-table";



//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

