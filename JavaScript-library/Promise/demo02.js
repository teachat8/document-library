function wait() {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve();
    },2000)
  })
}

var co = function(cb){
  return function(){
    return new Promise(function(resolve){
      cb();
      resolve()
    })
  }
}

var func1 = co(function(){
  console.log("call func1");
})

var func2 = co(function(){
  console.log("call func2");
})

// var func1 = function(){
//   return new Promise(function(resolve){
//     console.log("call func1");
//     resolve()
//   })
// }

// var func2 = function(){
//   return new Promise(function(resolve){
//     console.log("call func2");
//     resolve()
//   })
// }

// Promise.resolve()
//   .then(wait)
//   .then(func1)
//   .then(wait)
//   .then(func2)

async function test(){
  for (let f of [wait,func1,wait,func2]){
    await f();
  }
}
// test();

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1);
// 1 2 3


// Promise.resolve()
//   .then(wait)
//   .then(co(function(){
//     console.log("11111")
//   }))
//   .then(wait)
//   .then(co(function(){
//     console.log("22222")
//   }))

