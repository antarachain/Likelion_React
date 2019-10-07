// function plusTwo(s) {
//     return s*2
// }
// console.log(plusTwo(10))

// plusTwo = (s) => {
//     return s+2
// }
// console.log(plusTwo(10))

plusTwo = (s) => s+2

console.log(plusTwo(10))

arr = [1,2,3,4,5,6,7,8,9,13,152,1523,12526]

arr_map = arr.map(v => v*2)
console.log(arr_map)

arr_filter = arr.filter(v => v>10)
console.log(arr_filter)