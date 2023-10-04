/*
let nomes = ["Matheus", "Ana", "Joao", "Cleber"]

console.log(nomes)
console.log("Tamanho do array: "+nomes.length)
console.log(nomes[0])

let listaCompras = ["Amaciante", "Farinha de Trigo", "Pao de Queijo", 7, true]

console.log(listaCompras[3])
*/

/*
let listaDeNomes = ["Mario", "Ricardo", "Amanda", "Luiza"]

for(contador = 0; contador < listaDeNomes.length;contador++){
let mensagem = ("Boas vindas "+listaDeNomes[contador])
console.log(mensagem)
}
*/

/*
let listaDeAprovados = [
    'Viviane',
    'Matheus',
    'Thiago',
    'Thais',
    'Leticia',
]

const enviarEmail = (nome) => {
    console.log("Bem vindo "+nome+" você foi aprovado")
}

listaDeAprovados.forEach((item) =>{
    enviarEmail(item)
})
*/

/*let filmes = ["Os Incriveis", "Senhor dos Aneis", "Xuxa", "Procurando Nemo"]*/

/*console.log(filmes)*/

/*filmes.push("Harry Potter") */

/*filmes.pop() */

/*filmes.shift() */

/*filmes.unshift("Velozes e Furiosos")*/

/*console.log(filmes.indexOf("Senhor dos Aneis"))

console.log(filmes)*/

/*const nums = [14,9,32,50,100,120]

let resultado = nums.map(function(valor){
    return valor *2
})

console.log(resultado)*/

/* let lista = [45,9,16,25]

let lista2 = []

lista2 = lista.filter(function(item){
    if(item <20){
        return true
    } else {
        return false
    }
    })

    console.log */

/*
const produtos = [
    {Nome: "Ipod", preco: 200, fragil: true},
    {Nome: "Celular", preco: 1500,fragil: false},
    {Nome: "Televisão", preco: 4000, fragil: false},
    {Nome: "Notebook", preco: 8000, fragil: false}
]
console.log(produtos.filter(function(p){

    if(p.preco > 2000 && p.fragil == false)
    return p
}))
*/

/*
const alunos = [
    {Nome: "Ana Paula", idade: 15, sexo: 'feminino'},
    {Nome: "Carlos", idade: 17, sexo: 'masculino'},
    {Nome: "Cristiano", idade: 14, sexo: 'masculino'},
    {Nome: "Aline", idade: 13, sexo: 'feminino'},
    {Nome: "Pedro", idade: 15, sexo: 'masculino'},
    {Nome: "Sofia", idade: 12, sexo: 'feminino'},
    {Nome: "Paloma", idade: 16, sexo: 'feminino'}

]

console.log(alunos.filter(function(i) {
    if (i.idade >= 15 && i.idade <= 17) {
        return i
    } 
}))
*/


let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39]

let numeros2=[]

numeros2 = console.log(numeros.filter(function(n){
if (n > 18){
        return n
    }
}))


