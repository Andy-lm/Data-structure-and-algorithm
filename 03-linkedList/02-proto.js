// 如果在A对象上没有找到x属性那么会沿着原型链寻找x属性
let arr = [];
Object.prototype.x = "x";

