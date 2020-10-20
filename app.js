const path = require('path');   // const ==> reference type 
const express = require('express');

const {nowDateKorean, nowDateIso} = require('./modules/date');

const notFound = path.join(__dirname , 'public/404.html');

// console.log(nowDateKorean());
// console.log(nowDateIso());

const app = express();
app.listen(3000, ()=>{console.log('http://127.0.0.1:3000')});

app.use('/', express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.send('<h1>Hello</h1>');
});

//404 error pages
app.use((req, res)=> {
 //   res.redirect('/404.html');
 res.sendFile(notFound);
});