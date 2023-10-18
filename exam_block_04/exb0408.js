// advanced promise chaining techniques
/*
Promise.any:
Promise.any digunakan untuk mengeksekusi beberapa promise secara paralel dan
akan memenuhi promise segera begitu ada satu promise yang selesai tanpa 
menunggu yang lain. 
Hasilnya adalah nilai dari promise yang selesai pertama.
ilustrasi:
2s
p1:           ................

1s
p2:    ................     
*/
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 1 failed'), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 2'), 1000));

Promise.any([promise1, promise2])
    .then((result) => {
        console.log('Resolved :'+ result); // Output: 'Promise 2'
    })
    .catch((errors) => {
        console.error('Reject: ' + errors);
    });

