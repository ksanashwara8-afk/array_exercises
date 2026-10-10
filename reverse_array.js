function reverse(array) {
    const revArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i]);
    }
    console.log(revArray);
}
reverse([1, 2, 3, 4]);
