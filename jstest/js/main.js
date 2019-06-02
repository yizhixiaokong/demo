//Number 数字类型
var a = 123; //整型
var b = 1.1; //浮点型
var d = NaN; //Not a Number
var e = Infinity; //无穷大

//String 字符串类型
var aa = 'string';
var bb = "string2";
var cc = `string3`;

//Boolean 布尔值类型
var t = true;
var f = false;

//Array 数组类型
var arr = [
    'a', 'b', 'c',
    123, 321, true
];

//Object 对象类型
var obj = {
    name: 'name',
    value: 10,
    haa: 'haa'
};

//js自带的打印到控制台函数：
console.log(arr);
//js关键字typeof检测数据类型
console.log(typeof a);
//js中若用typeof检测Array类型对象，会显示object
//但其仍然是Array类型

//es6的let
let abc = 'abcd';
console.log(abc);

//js 中被默认认为为false的
var f1 = false;
var f2 = 0;
var f3 = '';
var f4 = NaN;
var f5 = null; //空
var f6 = undefined; //未定义
console.log(f6);


// == 和 ===
// ==会转换类型再比较，===会先比较类型
console.log("1 == 2", 1 == 2);
console.log("1 == 1", 1 == 1);
console.log("'1' == 1", '1' == 1);
console.log("1 === 2", 1 === 2);
console.log("1 === 1", 1 === 1);
console.log("'1' === 1", '1' === 1);