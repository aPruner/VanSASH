import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Navbar from './Components/Navbar';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(NavBar),
    //React.createElement(Counter),
    document.getElementById('mount')
  );
});
