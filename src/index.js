module.exports = function reverse(n) {
    if (n < 0) {
        n = 0 - n
    } npm
    let str = JSON.stringify(n)
    let rev = str.split('').reverse().join('')
    return rev * 1
}
