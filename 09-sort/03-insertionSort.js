Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        let tmp = this[i];
        let j = i;
        while (j > 0) {
            if (tmp < this[j - 1]) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = tmp;
    }
}
const arr = [3, 5, 4, 2, 1];
arr.insertionSort();
console.log(arr);
















