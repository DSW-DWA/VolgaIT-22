import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import page_0 from './Page_0';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  page_0(),
  document.getElementById('glasses-quiz-widget')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
