const valores = window.prompt('Digite 5 idades separadas por vírgula: ')
const idades = valores.split(',')
console.log("Idades " + idades)

let counter = 0

for (var i = 1; i <= valores.length ; i++) {
	const ages = parseInt(idades[i]) 
	if (ages >= 18){
		counter ++
	}
}
console.log(counter + " pessoa(s) tem a idade maior ou igual a 18 anos")