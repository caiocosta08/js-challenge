let arr1 = [5, 7, 1, 1, 2, 3, 22]
let arr2 = [1, 1, 1, 1, 1]
let arr3 = [1, 5, 1, 1, 1, 10, 15, 20, 100] 

const minChangeValue = (arr) => {
  
  let value = 0;

  for (currentValue of arr) {
    if (currentValue > value + 1) { 
      return ++value;
    }
    value = value + currentValue;
  }

  return ++value;
}

console.log(minChangeValue(arr1.sort((x,y) => x - y)))
console.log(minChangeValue(arr2.sort((x,y) => x - y)))
console.log(minChangeValue(arr3.sort((x,y) => x - y)))