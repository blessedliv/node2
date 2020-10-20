const path = require('path');   // const ==> reference type 
const express = require('express');

const {nowDateKorean, nowDateIso} = require('./modules/sample');


console.log(nowDateKorean());
console.log(nowDateIso());