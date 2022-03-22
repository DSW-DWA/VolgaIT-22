import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page_0 from './page_0/Page_0.js';
import Page_1 from './page_1/Page_1.js'
import reportWebVitals from './reportWebVitals';

let i =0;
let returnedUrl = document.getElementById('glasses-quiz-widget').dataset.source;
console.log(returnedUrl);
function tick (){
  let page = [Page_0,Page_1];
  let a = document.getElementsByClassName('next_page');
  for (const el of a) {
    el.addEventListener('click', ()=>{
      i++;
    });
  }
  ReactDOM.render(
    page[i](),
    document.getElementById('glasses-quiz-widget')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
setInterval(tick, 1000);