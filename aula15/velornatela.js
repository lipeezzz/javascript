let valores = [5, 8, 2, 9, 3]

console.log(valores)

console.log(`--------------------------`)

/*for (let v=0;  v<valores.length; v++) {
    console.log(`a posição ${v} tem o valor ${valores[v]}`)
}*/

for(let valor in valores) {
    console.log(`a posição ${valor} tem o valor ${valores[valor]}`)
}   

console.log(`--------------------------`)

let pos = valores.indexOf(3)
console.log(`o valor esta na posição ${pos}`)
