// spread 연산자 ...
let array1 = [1, 2];
let array2 = [...array1, ...[3, 4]]; //여러 배열로 펼친다 [1,2,3,4]
let array3 = [5];

function myFunction(a, b, c, d, e) {
    return a+b+c+d+e;
}

let result = myFunction.apply(null, [...array2, ...array3]); // [1,2,3,4,5]
console.log(result);
