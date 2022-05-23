// could explicitly do this: 
// const person: {
//   name: string,
//   age: number
// } = {
//   name: 'Tiaan',
//   age: 29
// }
// but better for TS to infer
// except for a tuple
// const person: {
//   name: string, 
//   age: number, 
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Tiaan',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
// below is not allowed because its strictly [num, str]
// person.role = [0, 'admin', 'user']
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Tiaan',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) map does not exist on string
}
// nested objects and types of such an object
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
