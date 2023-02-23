numero = window.prompt("Digite um número: ")
contador = 1

let numerosPares = []
let numerosImpares = []

while (contador <= numero){
	if (contador % 2 == 0){
		numerosPares.push(contador)
	}else{
		numerosImpares.push(contador)
	}
	contador ++
}

console.log("Números pares")
console.log(numerosPares)
console.log("Números ímpares")
console.log(numerosImpares)