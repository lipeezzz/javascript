function fatorial(n) {
    let fat = 1
    for(let C = n; C > 1; C--) {
        fat *= C
    }
    return fat
}

console.log(fatorial(3))