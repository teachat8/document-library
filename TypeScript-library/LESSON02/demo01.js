// 布尔值 boolean
var isDone = false;
var isDoneNow = true;
var isDoneString = true;
// let createdByNewBoolean: boolean = new Boolean(1);
var createdByNewBoolean = new Boolean(1);
var createdByBoolean = Boolean(1);
// 数字 number
var decLiteral = 1;
var hexLiteral = 0xff00f;
// ES6 中的二进制表示法
var binaryLiteral = 9;
// ES6 中的八进制表示法
var octalLiteral = 3808;
// 字符串 string
var studentName = 'teachat';
studentName = "Jim";
var age = 20;
// 模板字符串
console.log("I'm " + studentName + " My age is " + (age > 18 ? '成年' : '未成年'));
// 数组
// let list: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3];
// 元组 Tuple
// let x:[string,number];
// x = ['hello', 30];
// x = [30,'hello'];
// console.log(x[0].substr(1));
// console.log(x[1]);
// x[3] = 'world';
// console.log(x[3]);
// x[6] = true;  // Error, 布尔不是(string | number)类型
// 枚举
// enum Color {Red,Green,Blue}
// console.log(Color);
// console.log(Color.Blue);
// let c:Color = Color.Red;
// console.log(Color[2]);
// Any
var notSure = true;
var notSure2 = 123;
var notSure3 = "Jim";
var list3 = [1, true, "free"];
var anyThing = 'hello';
console.log(anyThing.myName);
// Void 空值
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName() {
    console.log("This is my warning message");
}
var unusable = null;
// Null Undefined
// let u:undefined = undefined;
// let u1: undefined = null;
// let n: null = null;
// let n1: null = undefined;
// Never
// function error(message:string):never{
//   throw new Error(message)
// }
// function fail(){
//   return error("Something failed")
// }
// function infiniteLoop():never{
//   while(true){
//   }
// }
// 类型断言
// let someValue:any = "this is a string";
// let strLength :number = (<string>someValue).length;
// console.log(strLength)
