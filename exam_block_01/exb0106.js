// Property attributes and freezing objects
const obj = { myProp: 123 };
Object.defineProperty(obj, 'myProp', {
writable: false,
    enumerable: false,
    configurable: false,
});
obj.myProp = 584;
let hasil = Object.getOwnPropertyDescriptor(obj, 'myProp');
console.log(hasil);

// property freeze
const frozen = {
    x: 2,
    y: 5
};
Object.freeze(frozen);
console.log('x: ' + Object.getOwnPropertyDescriptor(frozen, 'x'));
console.log('y: ' + Object.getOwnPropertyDescriptor(frozen, 'y'));
frozen.x = 7;
frozen.y = 8;
console.log(frozen);
// melakukan defrozen
let h = JSON.parse(JSON.stringify(frozen));
// let frozen = JSON.parse(JSON.stringify(frozen));
// frozen.x = 8;
// frozen.y = 11;
console.log("Dilakukan Defrozen: =================");
console.log(frozen);