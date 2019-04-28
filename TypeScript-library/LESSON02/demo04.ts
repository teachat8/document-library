function sum(x: number, y: number): number {
  return x + y;
}

sum(1,2);

// let mySum = function (x: number, y: number): number {
//   return x + y;
// };

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}


// function buildName(firstName?: string, lastName: string) {
//   if (firstName) {
//       return firstName + ' ' + lastName;
//   } else {
//       return lastName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName(undefined, 'Tom');

// function buildName(firstName: string, lastName: string = 'Cat'):string {
//   return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');

// function buildName(firstName: string = 'Tom', lastName: string) {
//   return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let cat = buildName(undefined, 'Cat');

// function push(array, ...items) {
//   items.forEach(function(item) {
//       array.push(item);
//   });
// }

// let a = [];
// push(a, 1, 2, 3);

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//       return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//       return x.split('').reverse().join('');
//   }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}