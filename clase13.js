var jose = {
  nombre: 'Jose',
  apellido: 'Padron',
  edad: 23,
  peso: 63
}

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso}kg`)


// function aumentarDePeso(persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = .2, DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for(var i = 1; i <= DIAS_DEL_ANO; i++) {

	var ramdom = Math.random();
	//una variable guarda un numero aleatorio entre 0 y 1

	//este codigo se ejecutara el 25% de las veces
	if( ramdom <= 0.25) {
		//aumenta de peso
		aumentarDePeso(jose)
	}

	else if (ramdom <= 0.50 ) {
		//baja de peso
		adelgazar(jose)
	}
}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(1)}kg`)
