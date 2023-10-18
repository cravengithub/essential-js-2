// the concept of regular expressions
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re2.test(re1));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// \d untuk mengecek adanya angka dalam suatu karakter
// let str = /\d+/;
// \d untuk mengecek adanya angka dalam suatu karakter
// * berarti mengizinkan whitespace sebagai angka
let str = /\d+/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(str.test("abc8xz"));
console.log(str.test(" "));

// ? membuat karakter didepannya jadi optional untuk dicek
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighr"));

//Regex untuk mengecek format tanggal 
let dt = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/;
console.log(dt.test("01-30-2003 08:45"));

let email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
console.log(email.test('susi@mail.com'));