function mapLength(array) {
    const count = [];
    for (let i = 0; i < array.length; i++) {
        count.push(array[i].length);
    }
    return count;
}
console.log(mapLength(["Hello", "apple", "h", ""]));
