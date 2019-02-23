//commonJS 스펙
// var _ = require('lodash');
//es6 import
import _ from 'lodash';
import './style.css';
import './hello.scss';
//named import (반드시 {}안에 export를 넣어야 함)
import {area, circumference} from './js/circle';
//default import : 이름을 임의로 바꿀 수 있다.
import box from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');//브라우저가 이해할수있도록(모듈방식이해못함) 기존 방식으로 컴파일

  return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');
console.log(area(5), circumference(5));
console.log(box(5));