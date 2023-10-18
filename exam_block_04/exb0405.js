// Explain, organize, and handle asynchronous events using callback functions

// callback pada SetTimeout

setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        console.log("Hello World");
    }
}, 1000); // dalam 1000 miliseconds


// callback pada setInterval
setInterval(function () {
    console.log("Belajar Callback");
}, 1000);

let funct = function () {
    flag = 1;
    console.log('1');
    next = function () {
        console.log('2');
    };
}

console.log("Selamat siang");
funct();

// Bentuk Callback yang sederhana
function sayHello(nama, callback) {
    console.log(nama + ", Selamat siang semuanya.")
    callback();
}
sayHello("Wahyu Sudiro", function () {
    console.log('Menjalankan Callback');
});
