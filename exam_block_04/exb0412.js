//  Implement the mechanism for decorating functions
// Contoh decorator
function logMethod(target, key, descriptor) {
    // const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        console.log(`Calling method ${key} with arguments ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} returned ${result}`);
        return result;
    };

    return descriptor;
}

class MyClass {
    @logMethod
    myMethod(param) {
        return `Hello, ${param}!`;
    }
}

const myInstance = new MyClass();
console.log(myInstance.myMethod("John"));
console.log(logMethod("John"));
