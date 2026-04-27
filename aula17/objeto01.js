let amigo = {nome: 'jose',
    sexo: 'M',
    peso: 80.6,
    engordar(p){
        console.log('engordou')
        this.peso += p
    }
} 

amigo.engordar(2) //engordou mais dois quilos

console.log(`${amigo.nome} pesa ${amigo.peso}KG`)