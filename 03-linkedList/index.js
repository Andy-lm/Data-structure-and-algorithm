// 链表：多个元素通过next连接而成的列表
const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;

// 链表的遍历
// 1.创建一个指针指向第一个元素
let point = a;
while (point) {
    console.log(point.val);
    // 2.通过这个元素的next属性不断指向下一个元素
    point = point.next;
}

// 链表的添加
const e = { val: "e" };
c.next = e;
e.next = d;

// 链表的删除
c.next = d;
