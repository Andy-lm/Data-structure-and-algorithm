const tree = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: []
                },
                {
                    val: "e",
                    children: []
                }
            ]
        },
        {
            val: "c",
            children: [
                {
                    val: "f",
                    children: []
                },
                {
                    val: "g",
                    children: []
                }
            ]
        }
    ]
}

const dfs = (root) => {
    // 访问根节点
    console.log(root.val);
    // 对根节点的children挨个进行深度优先遍历
    root.children.forEach(node => dfs(node));
    // root.children.forEach(dfs);
}
dfs(tree);