// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 2000, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log("success->",values);
// });
// expected output: Array [3, 42, "foo"]

var promise1 = Promise.resolve(3);
var promise2 =new Promise(function(resolve, reject) {
  setTimeout(reject, 2000, 'bar');
});
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 1000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log("success->",values);
}).catch((a,b,c) => {
  console.log("fail->",a,b,c);
});
// fail-> foo undefined undefined