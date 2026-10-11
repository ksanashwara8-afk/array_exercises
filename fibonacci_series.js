function fibonacci(limit) {
    let first = 0;
    let second = 1;
    const series = [];
    for (i = 0; i < limit; i++) {
        series.push(first);
        const sum = first + second;
        first = second;
        second = sum;
    }
    return series;
}
console.log(fibonacci(5));
