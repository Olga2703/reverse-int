module.exports = function reverse(n) {
    n = Math.abs(n);
    let nStr = String(n);
    if (nStr == '' || nStr == undefined) {
        return 0;
    } else {
        let nReverse = nStr.split('').reverse().join('');
        return Number(nReverse);
    }
};


/* function reverse(n) {
    n = Math.abs(n);
    let nStr = String(n);
    if (nStr == '' || nStr == undefined) {
        return 0;
    } else {
        let nReverse = nStr.split('').reverse().join('');
        return Number(nReverse);
    }
}

console.log(reverse(170)); */