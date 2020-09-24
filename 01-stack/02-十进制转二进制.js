var isValid = function (num) {
    const a = 2;
    const stack = [];
    var c = "";
    do {
        let b = num % a;
        // 将余数放到数组中
        stack.push(b);
        // 取整作为下一轮的被除数
        var num = parseInt(num / a);
    } while (num != 0);
    let stackLength = stack.length;
    for (let i = 0; i < stackLength; i++) {
        // 将余数由后进先出的顺序出栈
        c = c + stack.pop();
    }
    console.log(c);
}
isValid(100);


// class Static {
//     constructor() {
//         this.data = [];
//     }
//     pop(num) {
//         if (this.data.length) return this.data.pop();
//         throw new Error('stack is empty')
//     }
//     push(num) {
//         this.data.push(num);
//     }
//     peek() {
//         if (this.data.length) return this.data[this.data.length - 1];
//         throw new Error('stack is empty')
//     }
// }

