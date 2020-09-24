class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        let tmp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = tmp;
    }

    getParentIndex(n) {
        return (n - 1) >> 1;
    }

    getLeftIndex(i) {
        return (2 * i) + 1;
    }

    getRightIndex(i) {
        return (2 * i) + 2;
    }

    shiftUp(index) {
        if (index === 0) return;
        // 首先我们需要获取当前节点的父节点的索引
        const parentIndex = this.getParentIndex(index);
        // 判断当前节点与父节点的大小
        if (this.heap[parentIndex] < this.heap[index]) {
            // 将当前节点与父节点进行交换
            this.swap(parentIndex, index);
            // 重复直到到达栈顶或者为最小父节点
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if (this.heap[index] < this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
        if (this.heap[index] < this.heap[rightIndex]) {
            this.swap(index, rightIndex);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        // 将值放入到最小堆中
        this.heap.push(value);
        // 传入其索引进行上移操作
        this.shiftUp(this.heap.length - 1);
    }
    // 删除堆顶
    pop() {
        if (this.heap.length === 1) {
            this.heap.shift();
            return;
        }
        if (this.heap.length === 0) return;
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

const h = new MaxHeap();
h.insert(1);
h.insert(2);
h.insert(3);
h.pop();
h.pop();
h.pop();