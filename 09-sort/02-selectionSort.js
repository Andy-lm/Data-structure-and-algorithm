Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let tmp = this[minIndex];
            this[minIndex] = this[i];
            this[i] = tmp;
        }
    }
}
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
console.log(arr);






















