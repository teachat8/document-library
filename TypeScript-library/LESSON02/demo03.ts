// 数组的类型

let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');

// 数组泛型
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

function sum() {
  let args: IArguments = arguments;
}