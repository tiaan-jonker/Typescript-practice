"use strict";
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
// enum type
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR}
// const person = {
//   name: 'Tiaan',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN
// }
// could use 'any' but then the advantages are lost with TS
// let favoriteActivities: string[]
// favoriteActivities = ['Sports']
// console.log(person.name)
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
// console.log(hobby.map()) map does not exist on string
// }
// nested objects and types of such an object
// const product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//   }
// } = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
