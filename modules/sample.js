const moment = require('moment');

const nowDateIso = ()=>{
    return moment().format('YYYY-MM-DD HH:mm:ss');
}
;
const nowDateKorean = ()=>{
    return moment().format('YYYY년MM월DD일 HH시mm분ss초');
};


// const obj = {
//     moment: moment,
//     nowDateiso : nowDateIso,
//     nowDateKorean : nowDateKorean,
// }
//====> Changed to below.
module.exports = {moment, nowDateIso, nowDateKorean,};


// console.log(new Date());
// console.log(nowDate);
// console.log(nowDate2);
// ISO Date  :: 2020-10-20 21:04:10 

