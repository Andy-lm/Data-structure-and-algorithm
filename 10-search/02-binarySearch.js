// Array.prototype.binarySearch = function (item) {
//     let low = 0;
//     let heigh = this.length - 1;
//     while (low <= heigh) {
//         let mid = Math.floor((low + heigh) / 2);
//         let element = this[mid];
//         if (element > item) {
//             heigh = mid - 1;
//         } else if (element < item) {
//             low = mid + 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

// const res = [1, 2, 3, 4].binarySearch(1);
// console.log(res);






Array.prototype.binarySearch = function (item) {
    let low = 0;
    let heigh = this.length - 1;

    while (low <= heigh) {
        const mid = Math.floor((low + heigh) / 2);
        if (this[mid] < item) {
            low = mid + 1;
        } else if (this[mid] > item) {
            heigh = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

const res = [1, 2, 3, 4].binarySearch(3);
console.log(res);







