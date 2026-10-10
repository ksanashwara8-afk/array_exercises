const numbers = [3, 2, 3, 4];
function selectOdds(n) {
    const odds = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) odds.push(n[i]);
    }
    console.log(odds);
}
selectOdds(numbers);
