let a = 10
let b = 2
let c = 1

let result = calcul(a, b, c)

function calcul(n1, n2, n3) {
    return n1 - (n2 + n3)
}
console.log(result)

////

function calcul(n1, n2) {
    return n1 - n2
}

let recalcul = calcul(20, 10)
console.log(recalcul)

