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

//循环并没有什么大区别
var result = [
    11, 22, 33, 44, 66, 55
];
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}
var cntt = 0;
while (cntt < result.length) {
    cntt++;
    console.log(result[result.length - cntt]);
}

//函数
/*
    功能特点：
    1:封装代码
    2:控制数据流
    3:作用域
*/
function doSome() {
    console.log("first");
    console.log("second");
    console.log("第三步，英文我忘了");
}
doSome();
doSome();
//为了防止自定义全局变量作用域污染问题
//可采用以下方式：
;
(function() { //匿名函数
    //函数体
    var aaa;
    var bbb;
})( /*立即执行 */ );

//加减乘除
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return (b != 0 ? a / b : '除数为零');
}
console.log(div(4, 2));
console.log(div(4, 0));

//闭包Closure
function user(name) {
    var age, sex;
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            neme = newName;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        },
        getSex: function() {
            return sex;
        },
        setSex: function(newSex) {
            sex = newSex;
        }
    }
}

var xxx = user('小星星');
xxx.setAge(18);
xxx.setSex('女');
var name = xxx.getName();
var age = xxx.getAge();
var sex = xxx.getSex();
console.log(name, age, sex);

//alert()  纯提醒的信息
//alert('只是一个提示');

//confirm()   会有确定和取消两个按钮,有返回值,确定为true,取消为false
//var r = confirm('是否确定？');
//console.log(r);

//prompt()   弹出一个输入框,返回值为输入的值
// var r = prompt();
// console.log(r);

//几个函数
//setTimeout()  两个参数，前者是执行的内容，一般为函数，后者为设置的时间，时间到达后只执行一次内容。
//函数有返回值，返回值可理解为该计时器的标识
var timer = setTimeout(() => {
    console.log('你浪费了人生的5秒时间');
}, 5000);

/*
以下两种写法都可以，都是传入一个匿名函数
前者用了ES6的箭头表达式

setTimeout(() => {
    //内容
}, timeout);
setTimeout(function() {
    //内容
}, timeout);
*/

//setInterval   两个参数，前者为执行的内容，后者为间隔时间，每隔这么多时间都会执行一次
//函数有返回值，返回值可理解为该重复计时器的标识
var timee = 0;
var timer1 = setInterval(() => {
    timee++;
    console.log('你的时间正在流逝  +' + timee + 's');
}, 1000);
var timee2 = 0;
var timer2 = setInterval(() => {
    timee2++;
    console.log('你的时间同样正在流逝  +' + timee + 's');
}, 1000);

//clearTimeout()和clearInterval()   用于停止一个正在执行的计时器或者重复计时器
//参数为计时器标识
clearTimeout(timer);
clearInterval(timer1);
clearInterval(timer2);


//以下情况，会先输出first再输出second
setTimeout(() => {
    console.log('second');
}, 0);
console.log('first');
//这是因为setTimeout()和setInterval()都会将传入的function()放入一个队列中
//哪怕前者执行时间为0，整个队列仍在窗口外部，会晚于后者执行。