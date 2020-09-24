const inpusts = [[], [1], [100], [3001], [3002]];
const queue = [];
const result = [];
for (let i = 0; i < inpusts.length; i++) {
    if (!inpusts[i][0]) {
        result.push(null);
        continue;
    }
    if (queue.length === 0) {
        queue.push(inpusts[i][0]);
        result.push(queue.length);
        continue;
    }
    while (inpusts[i][0] - queue[0] > 3000) {
        queue.shift();
    }
    queue.push(inpusts[i][0]);
    result.push(queue.length);
}
console.log(result);
