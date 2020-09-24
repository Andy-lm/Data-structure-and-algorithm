const bt = require('./03-二叉树-bt');

// const postorder = (root) => {
//     if (!root) return;
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
// }

const postorder = (root) => {
    if (!root) return;
    const stack = [root];
    const outputStack = [];
    while (stack.length) {
        const tmp = stack.pop();
        outputStack.push(tmp);
        if (tmp.left) stack.push(tmp.left);
        if (tmp.right) stack.push(tmp.right);
    }
    while (outputStack.length) {
        const tmp = outputStack.pop();
        console.log(tmp.val);
    }
}

postorder(bt);