let num = [5 , 8 , 2 , 9 , 3]

num.push(9)
num.sort()
console.log(num)
console.log(`nosso vetor é o ${num}`)
console.log(`o primeiro valor é ${num[0]}`)
console.log(`aqui em ordem crescente: ${num.sort()}`)


for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}