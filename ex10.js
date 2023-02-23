const input = prompt("Digite um número inteiro: ")

let results = ''
for (let i = 1; i <= input; i++) {
	for (let j = 1 ; j <= i; j++) {
		results += '*'
	}

	results += '\n'
}

console.log(results)