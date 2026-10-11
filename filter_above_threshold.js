function filterAbove(array, threshold) {
    const count = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > threshold) count.push(array[i]);
    }
    return count;
}
console.log(filterAbove([2, 4, 6], 2));
