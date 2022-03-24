import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page_0 from './page_0/Page_0.js';
import Page_1 from './page_1/Page_1.js';
import Page_2_men from './page_2_men/Page_2_men.js'
import Page_2_women from './page_2_women/Page_2_women.js'
import reportWebVitals from './reportWebVitals';

let page = [Page_0,Page_1,[Page_2_men,Page_2_women]];
let root = document.getElementById('glasses-quiz-widget');
let strUrl = root.dataset.source

function change(i,strUrl){
  let renderPage; 
  if (Array.isArray(page[i])){
    switch(strUrl[strUrl.indexOf("=")+1]) {
      case "4":
        renderPage = page[i][0];
        break;
      case "5":
        renderPage = page[i][1];
        break;
      default:
        renderPage = page[i][0];
        break;
    }
  } else {
    renderPage = page[i];
  }
  

  ReactDOM.render(
    renderPage(),
    root
  );
  let next = document.getElementsByClassName('next_page');
  let prev = document.getElementsByClassName('prev_page');

  for (const el of next){
    el.addEventListener('click',() =>{
      let a = "";
      if (el.hasAttribute('data-argument')) {
        a = "&"+ el.dataset.argument +"="+el.dataset.value
      }
      console.log(strUrl+a);
      change(i+1,strUrl+a);
    });
  }

  for (const el of prev){
    el.addEventListener('click',() => {
      let a = "";
      if (el.hasAttribute('data-argument')) {
        a = strUrl.slice(0, strUrl.lastIndexOf("&",0));
      }
      console.log(a);
      change(i-1,a);
    })
  }
}
change(0,"");
reportWebVitals();