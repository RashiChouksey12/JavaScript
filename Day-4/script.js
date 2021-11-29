const arr = [1, 2, 3, 4, 5, [6, 7, 8], [9, 8, 7], 6, 5, 4]
function flat(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
            flat(value, result)
        } else {
            result.push(value)
        }
    }
    return result;
}
console.log(flat(arr))
