const graph = require("./graph");

const bfs = (n) => {
    const queue = [n];
    const visited = new Set();
    visited.add(n);
    while (queue.length) {
        const tmp = queue.shift();
        console.log(tmp);
        graph[tmp].forEach(element => {
            if (!visited.has(element)) {
                visited.add(element);
                queue.push(element);
            }
        });
    }
}
bfs(2);