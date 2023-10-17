// the concept of regular expressions
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re2.test(re1));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));