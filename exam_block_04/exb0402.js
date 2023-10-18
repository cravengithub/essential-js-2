// Immediately Invoked Function Expressions (IIFE)
function greeting() {
    console.log('latihan IIFE 01');
    // contoh penggunaan IIFE
    (function () {
        console.log('latihan IIFE 02');
        //  beberapa argument atau deklarasi dari fungsi
    });
}

// let str = greeting();
// console.log(str);
var myModule = (function () { // Open IIFE
    // Imports (via global variables)
    var importedFunc1 = "otherModule1.importedFunc1";
    var importedFunc2 = "otherModule2.importedFunc2";
    // Body
    function internalFunc() {
        // ···
        console.log('latihan IIFE 01');
    }
    function exportedFunc() {
        // importedFunc1();
        // importedFunc2();
        // internalFunc();
        console.log('latihan IIFE 02');
    }
    // Exports (assigned to global variable `myModule`)
    return {
        exportedFunc: exportedFunc,
    };
})(); // Close IIFE

console.log(myModule.exportedFunc());