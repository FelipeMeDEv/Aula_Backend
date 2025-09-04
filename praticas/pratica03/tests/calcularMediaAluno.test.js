const  media  = require('../src/calcularMediaAluno');

test ("calcular media sem nota" , () => {
    expect(media).toBeDefined()
})
test ("calcular media indefinida" , () => {
    expect(() => media.media2(undefined, undefined)).toThrow("Notas a1 ou a2 não informadas")
})
test ("calcular media com números negativos" , () => {
    expect(() => media.media2(-3, -1)).toThrow("Notas a1 ou a2 não podem ser negativas")
})
test ("calcular media sem o a3" , () => {
    expect(media.media2(5, 5, undefined)).toBeCloseTo(5)
})

test ("calcular media com a3 negativo" , () => {
    expect(() => media.media2(5, 5, -5)).toThrow("Nota a3 não pode ser negativa")
})
test ("calcular media com combinação" , () => {
    expect(media.media2(5,4,8)).toBeCloseTo(6.8)
})