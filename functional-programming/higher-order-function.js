// 여러 함수를 조합하여 새 함수 생성
const compose = (...functions) =>
    input => functions.reduceRight((acc, fn) => fn(acc), input);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const compute = compose(square, double, addOne);
console.log(compute(3));  // ((3 + 1) * 2)² = 64


// 일부 인자만 미리 적용한 새 함수 생성
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");
console.log(sayHello("World"));  // "Hello, World!"