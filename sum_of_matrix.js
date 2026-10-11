function sumMatrix(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            sum += matrix[row][column];
        }
    }
    return sum;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(sumMatrix(matrix));
