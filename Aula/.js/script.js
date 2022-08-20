function double(item){
    return item*2
}
var array = [1, 2, 3, 4, 5]
console.log(array.map(double));


function onlyOdd(item){
    return item % 2 === 1
}
var array = [1, 2, 3, 4, 5]
console.log(array.filter(onlyOdd)) // [1,3,5];


function sortReverse(a, b){
    if (a>b) return 1
    if (a<b) return -1
    return 0
}

function sortReverse2(a, b){
    return a - b
}

var array = [1, 3, 2, -9, 6, 10, 99, -8, 3]

console.log(array.sort(sortReverse));
console.log(array.sort(sortReverse2));