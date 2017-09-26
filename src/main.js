require("file-loader?name=index.html!./index.html");

import React from 'react';
import ReactDOM from 'react-dom';
import Tembo from './pages/tembo';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Tembo />,
    document.getElementById('main')
  );
});