const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if ((a < 0) || (b < 0)) return "ERROR";

    let soma = 0;
    if(a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (a; a <= b; a++) {
        soma += a;
    }

    return soma;
};

// Do not edit below this line
module.exports = sumAll;
