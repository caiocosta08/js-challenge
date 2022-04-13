let array1 = [1, 2, 3, 5, 6, 8, 9]
let array2 = [-2, -1]
let array3 = [-10, -5, 0, 5, 10]

let correct1 = [1, 4, 9, 25, 36, 64, 81]
let correct2 = [1, 4]
let correct3 = [0, 25, 25, 100, 100]

const squared = (number) => number*number;

let results1 = array1.map( item => squared(item))
let results2 = array2.map( item => squared(item))
let results3 = array3.map( item => squared(item))

results1.sort((x,y => x - y))
results2.sort((x,y => x - y))
results3.sort((x,y => x - y))

console.log(correct1, results1, )
console.log(correct2, results2, )
console.log(correct3, results3, )