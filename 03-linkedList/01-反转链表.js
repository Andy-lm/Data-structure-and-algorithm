// 链表：多个元素通过next连接而成的列表
const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;


let point1 = null;
let point2 = a;
while (point2) {
    const tmp = point2.next;
    point2.next = point1;
    point1 = point2;
    point2 = tmp;
}
