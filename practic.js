const jsonString = '{"a":1, "b":2, "foo":"bar"}';
const obj = JSON.parse(jsonString);
console.log(obj)
delete obj.foo;
; 
// console.log(JSON.stringify(obj));