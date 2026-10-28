array = [1, 2, 3, 'one', 'two', 'three']
array.push(4, 5, 6)
array = array.filter(item => typeof item !== 'string')
console.log(array)