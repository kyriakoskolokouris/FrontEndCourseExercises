const palindromes = function(str) {
    const punctuation = /[^A-Za-z0-9]/g;
    const cleanedUp = str.replace(punctuation, "")
    const reversed = cleanedUp.split('').reverse().join('');

    return cleanedUp === reversed;
}

module.exports = palindromes
