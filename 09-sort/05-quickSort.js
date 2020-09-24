Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length === 1 || arr.length === 0) return arr;
        let mid = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        // 左边的合并完在左边，右边的合并完在右边
        return [...rec(left), mid, ...rec(right)];
    }
    rec(this).forEach((v, i) => {
        this[i] = v;
    });
}
const arr = [5, 4, 2, 3, 3, 2, 1];
arr.quickSort();
console.log(arr);