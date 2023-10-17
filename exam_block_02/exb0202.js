class StaticPublicMethodClass {
    // constructor(){
    //     this.assert = Require('assert');    
    // }
    static 'quoted field key' = 2;
    // static [computedFieldKey] = 3;
    // mengumpulkan konstanta
    static PHI = 3.14;
    static EULER_VALUE = 2.71828;

    // method untuk utilisasi (men-split teks, melakukan tokenisasi )
    static staticMethod() {
        return 'staticMethod';
    }
    static get staticAcessor() {
        return 'staticGetter';
    }
    static set staticAcessor(value) {
        // assert.equal(value, 'staticSetter');
        console.log('staticSetter: ' + value);
    }
}

console.log(StaticPublicMethodClass.staticMethod());
console.log(StaticPublicMethodClass.EULER_VALUE);
console.log(StaticPublicMethodClass.staticAcessor);
// StaticPublicMethodClass.staticAcessor = 'percobaan';
// menjadi Dictionary
console.log(StaticPublicMethodClass["quoted field key"]);