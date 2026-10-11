function reverseFibonacci(limit) {
    let first = 0;
    let second = 1;
    const series = [];
    for (let i = 0; i < limit; i++) {
        series.unshift(first);
        const sum = first + second;
        first = second;
        second = sum;
    }
    return series;
}
console.log(reverseFibonacci(4));
