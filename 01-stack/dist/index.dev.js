"use strict";

// 栈是一个后进先出的数据结构
// 像数组，push进去的数据在后面，从后往前pop出栈
var stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
var item1 = stack.pop();
var item2 = stack.pop();