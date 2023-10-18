// advanced promise chaining techniques
/*
Promise.all:
Promise.all digunakan untuk mengeksekusi beberapa promise secara paralel dan 
menunggu hingga semua promise tersebut selesai. 
Hasilnya adalah array dari hasil dari promise-promise tersebut, 
dengan urutan yang sesuai dengan urutan promise aslinya.
ilustrasi:
2s
p1              ................
1s
p2 ................
1.5s
p3      ....................
*/
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3'), 1500));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('resolved: ' + results); // Output: ['Promise 1', 'Promise 2', 'Promise 3']
    })
    .catch((error) => {
        console.error('error: ' + error);
    });
