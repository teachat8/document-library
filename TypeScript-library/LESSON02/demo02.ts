// 联合类型
// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
// myFavoriteNumber = true;

// function getLength(something: string | number): number {
//   return something.length;
// }

function getString(something: string | number): string {
  return something.toString();
}

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// console.log(myFavoriteNumber.length); // 5
// myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); 

// 对象的类型--接口

interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// tom.id = 9527;