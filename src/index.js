import $ from 'jquery';
// var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const sampleComponent = <div> React and webpack are working! </div>;
ReactDOM.render(sampleComponent, rootElement);

$('div').text('**webpack** is working!');