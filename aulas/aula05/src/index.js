function Soma (a, b) {
    return a + b;
}
function subtracao (a, b) {
    return a - b;
}
function multiplicacao (a, b) {
    return a * b;
}
function divisao (a, b) {
    if (b === 0) throw Error("Divisão por ZERO");
    return a / b;
}

module.exports = { Soma,
    subtracao,
    multiplicacao,
    divisao
 }
