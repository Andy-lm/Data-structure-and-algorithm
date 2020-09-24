var isValid = function (s) {
    // 创建一个栈
    const stack = [];
    if (stack.length % 2 === 1) {
        return false;
    }
    for (let i = 0; i <= s.length - 1; i++) {
        // 遍历这个字符串
        let str = s[i];
        // 遇到左括号就入栈
        if (str === "(" || str === "{" || str === "[") {
            stack.push(str);
            console.log(stack);
        } else if (
            // 遇到右括号且与栈顶左括号类型相同就出栈
            (stack[stack.length - 1] === "(" && str === ")") ||
            (stack[stack.length - 1] === "[" && str === "]") ||
            (stack[stack.length - 1] === "{" && str === "}")
        ) {
            stack.pop();
        } else {
            // 否则返回错误
            return false;
        }
    }
    // 最后栈的长度为0就合法
    return stack.length === 0;
};

console.log(isValid("(]"));