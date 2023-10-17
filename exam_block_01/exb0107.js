// Prototype chains
const proto = {
    // __proto__:obj,
    protoProp: 'a',
};
const obj = {
    // __proto__: proto, 
    objProp: 'b',
}

proto.__proto__ = obj;
console.log(proto.objProp);