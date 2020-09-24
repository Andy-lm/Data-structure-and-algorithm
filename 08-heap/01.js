const arr = [1, 2, 3, 4];
const arr2 = arr.map(n => {
    return n + "*";
})

const arr3 = arr.filter(n => {
    return n > 2;
});

const arr4 = arr.some(n => {
    if (n > 2) {
        return true;
    }
})

const arr5 = arr.every(n => {
    if (n > 2) {
        return true;
    }
})

const arr6 = arr.sort((a, b) => b - a);

const arr7 = arr.fill('x');

const arr8 = Array.from({ length: 4 }, () => {
    return new Array(3).fill("x");
})
console.log(arr8);