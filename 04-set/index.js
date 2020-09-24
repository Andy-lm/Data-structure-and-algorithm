const s1 = new Set([1, 1, 2, 2]);
// 求交集
const s2 = new Set([2, 3]);
const s3 = [...s1].filter(items => s2.has(items));
console.log(s3);

// console.log([...s]);
// // 添加
// s.add(3);
// console.log([...s]);
// // 删除
// s.delete(1);
// console.log([...s]);
// // 查找
// console.log(s.has(1));
// // 清空
// s.clear();
// console.log([...s]);