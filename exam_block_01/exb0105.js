// extracting method
const jane = {
    first: 'Jane',
    says(text) {
        return this.first + ' ' + text;
    },
};
const func = jane.says('latihan');
console.log(func);