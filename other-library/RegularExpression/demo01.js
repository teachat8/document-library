let str = "I love JavaScript!"; // 将在这里搜索

let regexp = /love/;
console.log( str.search(regexp) ); // 2

let str1 = "I love JavaScript!"; // 将在这里搜索

let substr = 'love';
console.log( str1.search(substr) ); // 2

let str2 = "A drop of ink may make a million think";

console.log( str2.search( /a/i ) ); // 0（最开始的位置）

let str3 = "Fame is the thirst of youth";

let result = str3.match( /fame/i );
console.log( result ); 
console.log( result[0] );    // Fame（匹配项）
console.log( result.index ); // 0（在最开始的位置 0）
console.log( result.input ); // “Fame is the thirst of youth”（字符串本身）

let str4 = "JavaScript is a programming language";

let result1 = str4.match( /JAVA(SCRIPT)/i );

console.log( result1 ); 
console.log( result1[0] ); // JavaScript（整个匹配项）
console.log( result1[1] ); // script（对应括号里的匹配项）
console.log( result1.index ); // 0
console.log( result1.input ); // JavaScript is a programming language

let str5 = "HO-Ho-ho!";

let result2 = str5.match( /ho/ig );

console.log( result2 ); // HO, Ho, ho（所有的匹配项，大小写不敏感）

let str6 = "HO-Ho-ho!";

let result3 = str6.match( /h(o)/ig );

console.log( result3 ); // HO, Ho, ho

let str7 = "Hey-hey-hey!";

// console.log( str7.match(/ho/gi).length );  // error! there's no length of null