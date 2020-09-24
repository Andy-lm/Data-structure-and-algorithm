const m = new Map();
// 增
m.set("a", "aa");
m.set("b", "bb");
// 查
console.log(m.get("a"));
// 删
m.delete("b");
// 清空所有的内容
// m.clear();
console.log(m);
// 改
m.set("a", "aaa");
console.log(m);