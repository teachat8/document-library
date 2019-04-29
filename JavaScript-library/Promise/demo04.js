var promise1 = Promise.resolve(3);

// var promise1 =new Promise(function(resolve, reject) {
//   setTimeout(reject, 800, 'zoo');
// });
var promise2 =new Promise(function(resolve, reject) {
  setTimeout(reject, 2000, 'bar');
});
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 1000, 'foo');
});

Promise.race([promise1, promise2, promise3]).then(function(values) {
  console.log("success->",values);
}).catch((a,b,c) => {
  console.log("fail->",a,b,c);
});
// success-> 3