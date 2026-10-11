function findIndex(array, element) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return -1;
}
console.log(findIndex(["hello", "apple", "tea", "coffee", "tea"], "tea"));
