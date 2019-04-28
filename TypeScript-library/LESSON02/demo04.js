function sum(x, y) {
    return x + y;
}
sum(1, 2);
// let mySum = function (x: number, y: number): number {
//   return x + y;
// };
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
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
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
