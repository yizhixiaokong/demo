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
//setTimeout()  两个参数，前者是执行的内容，一般为回调函数，后者为设置的时间，时间到达后只执行一次内容。
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
//这是因为setTimeout()和setInterval()都会将传入的function()放入一个队列(任务队列taskqueue)中
//哪怕前者执行时间为0，整个队列仍在窗口(主线程执行栈)外部，会晚于后者执行。

/*

单线程 同步任务 异步任务 执行栈 任务队列

js是单线程的，意味着所有任务都像排长队一样排成一条，执行完一个再执行下一个，这些任务就叫同步任务(synchronous)
同步任务执行的环境就是主线程，这条长队就是执行栈(execution context stack)。

而这样就导致有时有些任务如果停留很久(比如等待一个打字很慢的人输入他的账号密码)
其他的任务就被延迟执行，这会影响到CPU的运行效率

所以就有了异步任务，将这些需要等待的任务，移出执行栈让他自己等待，在某些时候再将其放入另外一条长队中
这些需要等待或者需要延迟执行的任务就是异步任务(asynchronous)，这个另外一条长队就叫任务队列(taskqueue)

将这些异步任务移出之后，CPU可以继续执行主线程执行栈中的同步任务
就好比你泡面，加水之后等泡面好的这段时间，你可以先去上个厕所什么的
等上完厕所泡面也差不多泡好了，可以直接吃，就提高了效率

事件与回调函数

任务队列，里面排队的是一个个事件(event)
当某些异步任务等待的事情结束了(比如那个打字很慢的人终于输完了自己的账号密码)，就会产生一个事件，放入队列中
等于说告诉主线程这个任务可以继续做接下来的事了，不用再等了
主线程执行完执行栈中的同步任务，就过来检查任务队列，看看有哪些异步任务是可以继续执行的
如果有，就将其放入执行栈继续执行

回调函数(callback)是什么呢，就是指那些异步任务，等待完了之后要执行那些事情

比如假设刚才那个打字很慢的人，主线程告诉他，他输入完用户名密码就给他一百万，
但是他打字真的很慢，所以主线程就把他当成一个异步任务踢出执行栈，等他自己慢慢输入，主线程自己就做自己的事情去了
过了十年，他终于输入完了，然后就产生了一个事件，放入任务队列
主线程过会儿检查任务队列的时候，一看woc这货终于输入完了，然后把它调回执行栈，给他发钱
这个给他一百万的函数，就是回调函数

回调函数就是这些被主线程暂时搁置的代码，每个异步任务都要指定对应的回调函数，不然主线程不知道等你半天之后要干嘛

事件循环

事件循环(event loop)又是什么呢
其实很简单，主线程不断重复的执行执行栈中的代码，然后去读取任务队列中的事件的过程就是事件循环
主线程执行执行栈中的代码->检查任务队列中的事件->执行对应事件的回调函数->又执行执行栈中的代码->又去检查任务队列->...loop....
注意主线程会先执行完执行栈中的代码再去检查任务队列

setTimeout()
setTimeout()为定时器，一般理解为延迟若干时间后执行某些事
setTimeout(回调函数,延迟时间)函数有两个参数
第一个参数为回调函数，标明时间到达后执行什么事情
第二个参数为延迟时间，标明延迟多少时间执行

看一个例子：

console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
setTimeout(() => {
    console.log(3);
}, 0);
console.log(4);
以上写法用了ES6的箭头表达式(见166行)
先自己想想输出的结果



执行结果顺序为1432
因为1和4的输出都在执行栈中，2和3在任务队列中
所以先执行执行栈中的代码，再检查任务队列中的事件
1和4 按照先后顺序输出
2和3 由于3设置的延迟时间是0，所以早于2，在消息队列中排在2前面
于是最终的输出顺序是1432

再看一个例子：

function foo() {
    console.log('first');
    setTimeout(() => {
        console.log('second');
    }, 5);
}
for (var i = 0; i < 20; i++) {
    foo();
}
先自己想想输出的结果



以上输出结果为，先输出了全部(20次)的first，然后输出全部的second
所有的first都在执行栈中，所有的second都在任务队列中，所以所有的first都在second之前输出。

还有两个有关的经典题：
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        i += i;
        console.log(i);
    }, 1000)
}
var i = 1;
console.log(i);
以及
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        i += i;
        console.log(i);
    }, 1000)
}
console.log(i);
思考一下两者的执行结果



前者结果 1 2 4 8
后者结果 3 6 12 24

首先结果与定时器设置的延迟时间无关，设置成0ms也是一样的结果
执行结果源于异步执行

然后作用域问题，js中for不存在私有作用域，下面执行的console.log(i)中的i继承于for循环的i，循环执行完后i为3
前者将i重新赋值为1，后者i仍为3
按照执行顺序，循环之下的console.log在主线程执行栈中，先执行，然后再执行任务队列中的三次function
所以前者结果为 1,2,4,8 后者结果为3,6,12,24


其他还有些关于其他(比如ES6中的Promise对象)的异步问题(优先级啊之类的)，这里先不研究。
*/