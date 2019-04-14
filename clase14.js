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
const INCREMENTO_PESO = .3, DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < .3
const realizaDeporte = () => Math.random() < .4

const META = jose.peso - 3
var dias = 0

while (jose.peso  > META) {
  if (comeMucho()) {
    aumentarDePeso(jose)
  }
  if (realizaDeporte()) {
    adelgazar(jose)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jose.nombre} adelgazo 3kg`)
