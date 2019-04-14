var contador = 0

const llueve = () => Math.random() < 0.25  

do {
  contador+=1
} while (!llueve());

//En la primera condición en caso de que sea 1 lo cambio por "una".

console.log(`Me mandaron a joder al coño ${contador === 1 ?'una':contador} ${contador < 2 ? 'vez':'veces'}`)