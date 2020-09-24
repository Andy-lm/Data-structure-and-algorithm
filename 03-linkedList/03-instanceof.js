// 手动实现instancesOf
// 原理：如果A可以沿着原型链找到B.prototype那么返回true
const instancesOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
}