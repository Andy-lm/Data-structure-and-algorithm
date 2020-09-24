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

const bfs = (root) => {
    // 创建一个队列，将根节点入队
    const queue = [root];
    while (queue.length) {
        // 将队头出队并访问
        let queueTop = queue.shift();
        console.log(queueTop.val);
        // 将队头的children挨个入队
        queueTop.children.forEach(node => {
            queue.push(node);
        })
    }
}

bfs(tree);