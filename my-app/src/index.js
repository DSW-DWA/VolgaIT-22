import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page_0 from './page_0/Page_0.js';
import Page_1 from './page_1/Page_1.js';
import reportWebVitals from './reportWebVitals';

let page = [Page_0,Page_1,];
let root = document.getElementById('glasses-quiz-widget');
let strUrl = root.dataset.source;
console.log(typeof strUrl);

function change(i,strUrl){
  ReactDOM.render(
    page[i](),
    root
  );
  let next = document.getElementsByClassName('next_page');
  let prev = document.getElementsByClassName('prev_page');
  for (const el of next){
    el.addEventListener('click',() =>{
      let a = "";
      if (el.hasAttribute('data-argument')) {
        if (i == 1) a = "?" +el.dataset.argument +"="+el.dataset.value;
          else a = "&"+ el.dataset.argument +"="+el.dataset.value
      }
      console.log(strUrl+a);
      change(i+1,strUrl+a);
    });
  }
  for (const el of prev){
    el.addEventListener('click',() => {
      let a = "";
      if (el.hasAttribute('data-argument')) {
        if (i == 1) a =strUrl.slice(0,strUrl.lastIndexOf('?')) +'/';
          else a = strUrl.slice(0,strUrl.lastIndexOf('&'));
      }
      console.log(a);
      change(i-1,a);
    })
  }
}
change(0,strUrl);
reportWebVitals();