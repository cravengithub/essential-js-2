// advanced promise chaining techniques
/*
Promise.race:
Promise.race digunakan untuk mengeksekusi beberapa promise secara paralel dan
akan memenuhi promise segera begitu ada satu promise yang selesai, 
tanpa peduli promise yang lainnya. 
Hasilnya adalah nilai dari promise yang selesai pertama.
ilustrasi:
2s
p1:           ................

1s
p2:    ................
*/
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3'), 1000));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Output: 'Promise 3'
  })
  .catch((error) => {
    console.error(error);
  });
