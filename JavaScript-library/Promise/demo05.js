async function showAvatar() {

  // 读取我们的 JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // 读取 GitHub 用户信息
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // 显示化身
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // 等待 3 秒
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

// 在顶层代码中导致语法错误
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();



// 函数前的 async 关键字有两个作用：

// 总是返回 promise。
// 允许在其中使用 await。
// 在 promise 之前的 await 关键字，使 JavaScript 等待 promise 被处理，然后：

// 如果有 error，就会产生异常，就像在那个地方调用了 throw error 一样。
// 否则，就会返回值，我们可以给它分配一个值。
// 它们一起为编写易于读写的异步代码提供了一个很好的框架。

// 对于 async/await，我们很少需要编写 promise.then/catch，但我们不应该忘记它们是基于 promise 的。因为有时（例如，在最外面的范围）我们不得不使用这些方法。Promise.all 也是一个很好的东西，它能够同时等待很多任务。


class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1
