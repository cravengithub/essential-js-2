let str = 'Mix and Match';
let s = str.substring(4,6);
let dt = new Date('2023-10-23');
let arr = new Array(5);
let x = Math.random() / arr.length;
console.log(x);
// console.log(dt.getDay());
// console.log(s);

x = 0;
y = 2;
while(y > 0.5 || y < 0.0){
	x = x + 1; //x =1
	y = y/x-y;
}
console.log(x);

while(y > 0.5 || y > 0.0){
    x = x + 1
}