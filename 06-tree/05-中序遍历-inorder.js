const bt = require("./03-二叉树-bt");

// const inorder = (root) => {
//     if (!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// }

const inorder = (root) => {
    if (!root) return;
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const tmp = stack.pop();
        console.log(tmp.val);
        p = tmp.right
    }
}


inorder(bt);