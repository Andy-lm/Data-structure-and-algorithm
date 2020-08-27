// 函数调用堆栈
const fn1 = () => {
    fn2()
};
const fn2 = () => {
    fn3()
};
const fn3 = () => { };

fn1();