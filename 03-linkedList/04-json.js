const json = {
    a: {
        b: {
            c: 1
        }
    },
    e: {
        f: {
            g: 2
        }
    }
}

const path = ["a", "b"];
let p = json;
path.forEach(key => {
    p = p[key];
});

const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto;
    }
    return false;
}

