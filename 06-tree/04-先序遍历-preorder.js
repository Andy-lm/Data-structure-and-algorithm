const bt = require("./03-二叉树-bt");

// const preorder = (root) => {
//     if (!root) return;
//     // 首先访问根节点
//     console.log(root.val);
//     // 对根节点的左子树进行先序遍历
//     preorder(root.left);
//     // 对根节点的右子树进行先序遍历
//     preorder(root.right);
// }
const a = Infinity

const preorder = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
        const tmp = stack.pop();
        console.log(tmp.val);
        if(tmp.right) stack.push(tmp.right);
        if(tmp.left) stack.push(tmp.left);
    }
}

preorder(bt);