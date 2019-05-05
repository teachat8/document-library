console.log('12-34-56'.split('-')) // [12, 34, 56]

console.log('12-34-56'.split(/-/)) // [12, 34, 56]

// 把横线替换成冒号,当 replace 的第一个参数是字符串时，它只会查找第一个匹配项。
console.log('12-34-56'.replace("-", ":"))  // 12:34-56

// 用冒号替换所有的横线,如果要找到所有的横线，我们不能使用字符串 "-"，而是 regexp /-/g，带上 g 修饰符。
console.log( '12-34-56'.replace( /-/g, ":" ) )  // 12:34:56

let str = "John Doe, John Smith and John Bull.";

// 对于每个 John — 替换成 Mr.John $& 将所有的 "John" 替换成 "Mr.John"：
console.log(str.replace(/John/g, 'Mr.$&'));
// "Mr.John Doe, Mr.John Smith and Mr.John Bull.";

let str1 = "John Smith";

console.log(str1.replace(/(John) (Smith)/, '$2, $1')) // Smith, John

let i = 0;

// 将每个“ho”都替换成函数所返回的结果
console.log("HO-Ho-ho".replace(/ho/gi, function() {
  return ++i;
})); // 1-2-3