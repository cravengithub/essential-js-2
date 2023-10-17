// Property attributes and freezing objects
const obj = { myProp: 123 };
Object.defineProperty(obj, 'myProp', {
    writable: false
});
let hasil = Object.getOwnPropertyDescriptor(obj, 'myProp');
obj.myProp = 584;
// console.log(obj);

// property freeze
const frozen = Object.freeze({x:2, y:5});
frozen.x = 11;
console.log('x: ' + Object.getOwnPropertyDescriptor(frozen, 'x'));
let h = JSON.parse(JSON.stringify(frozen));
h.x = 8;
h.y = 11;
console.log(h);