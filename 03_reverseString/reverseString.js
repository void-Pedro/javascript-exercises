const reverseString = function(string) {
    retorno = "";
    for (let i = string.length - 1; i >= 0; i--) {
        retorno += string[i];
    }
    return retorno;
};

// Do not edit below this line
module.exports = reverseString;