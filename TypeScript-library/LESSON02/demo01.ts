// 布尔值 boolean
let isDone: boolean = false;
let isDoneNow: boolean = true;
let isDoneString: boolean = true;

// let createdByNewBoolean: boolean = new Boolean(1);

let createdByNewBoolean: Boolean = new Boolean(1);

let createdByBoolean: boolean = Boolean(1);

// 数字 number
let decLiteral: number = 1;
let hexLiteral: number = 0xff00f;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1001;
// ES6 中的八进制表示法
let octalLiteral: number = 0o7340;

// 字符串 string
let studentName: string = 'teachat';
studentName = "Jim";

let age: number = 20;

// 模板字符串
console.log(`I'm ${studentName} My age is ${age > 18 ? '成年': '未成年' }`);

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
let notSure:any = true;
let notSure2:any = 123;
let notSure3:any = "Jim";

let list3:any[] = [1,true,"free"]

let anyThing: any = 'hello';
console.log(anyThing.myName);


// Void 空值
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName():void{
  console.log("This is my warning message")
}

let unusable:void = null;

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



