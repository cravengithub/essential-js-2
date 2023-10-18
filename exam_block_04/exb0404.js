// Explain, create, and implement generators and iterators in code

//  contoh iterasi biasa dengan function forEach
let arr = [87, 85, 79, 45, 67, 95];
arr.forEach(element => {
    // console.log(element);
});

// contoh iterasi biasa dengan function for
for (const ar of arr) {
    // console.log(ar);
}

// Membuat generator
nilai = {};
nilai[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 1;
            if (n == 10) {
                done = true;
                return { value: n, done: done };
            }
            return { value: n, done: done }; 
        }
    }
}
// console.log(nilai[Symbol.iterator]().next().value);
// penggunaan iterator
/*
let hasil = nilai[Symbol.iterator]();
while (true) {
    const h = hasil.next();
    console.log(h.value);
    if (h.done) {
        break;
    }
}*/

// generator sederhana
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const iterator = generateNumbers();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
/*
while(true){
    res = iterator.next();
    console.log(res.value);
    if (res.done){
        break;
    }    
}*/

// iterator sederhana
const itr = arr[Symbol.iterator]();
/*
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());*/
while(true){
    res = itr.next();
    console.log(res.value);
    if (res.done){
        break;
    }    
}
