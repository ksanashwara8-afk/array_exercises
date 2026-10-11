function filterBelow(array, threshold) {
    const count = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < threshold) count.push(array[i]);
    }
    return count;
}
console.log(filterBelow([2, 4, 6], 0));
