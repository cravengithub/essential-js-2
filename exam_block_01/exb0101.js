// Contoh Fixed Layout Object
const fixedLayoutObject = {
    product: 'carrot',
    quantity: 4
};

// Dictionary Object
const dictionaryObject = {
    ['one']: 1,
    ['two']: 2,
    [4]: "latihan",
    ['A']: true
};

// mengubah nilai properti pada fixedLayoutObject
fixedLayoutObject.product = 'Apel';
fixedLayoutObject.quantity = 5;
// console.log(fixedLayoutObject.product);
// console.log(fixedLayoutObject.quantity);
// console.log(dictionaryObject['A']);

// mengubah nilai properti pada dictionaryObject
dictionaryObject['two'] = 10;
dictionaryObject['A'] = false;
console.log(dictionaryObject);