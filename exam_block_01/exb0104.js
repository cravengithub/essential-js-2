// spread property 
const obj = {
    one: 1, 
    two: 2
};

// spreading item
const arr = {...'123'};
const ar2 = {...[5, 6, 8]}
// console.log(ar2[2]);

// Destructive spreading
const target = {a: 1};
const result = Object.assign(
    target, {b:2}, {c: 3, b: true}
);
console.log(result);
