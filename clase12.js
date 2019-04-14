var jose = {
  nombre: 'Jose',
  apellido: 'Padron',
  edad: 23,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  gamer: true
}

var natalia = {
  nombre: 'Natalia',
  apellido: 'Fernandez',
  edad: 4
}

const MAYORIA_DE_EDAD = 18

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  
  if (persona.ingeniero) {
    console.log('Es ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Es cocinero')
  } else {
    console.log('No es cocinero')
  }

  if (persona.cantante) {
    console.log('Es cantante')
  } else {
    console.log('No es cantante')
  }

  if (persona.dj) {
    console.log('Es dj')
  } else {
    console.log('No es Dj')
  }

  if (persona.guitarrista) {
    console.log('Es guitarrista')
  } else {
    console.log('No es guitarrista')
  }

  if (persona.gamer) {
    console.log('Es pro gamer')
  } else {
    console.log('No es gamer')
  }
}

// var esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// } 

// const esMayorDeEdad = persona => {
//   persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({edad})

function imprimirSiEsMayorDeEdad (persona){
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad, porque tiene ${persona.edad} años`)
  } else {
    console.log(`${persona.nombre} es menor de edad, porque tiene ${persona.edad} años`)
  } 
}

// function permitirAcceso(persona) {
//   if (!esMayorDeEdad(persona))
//   console.log('ACCESO DENEGADO')
// }

function permitirAcceso(persona) {
  if(esMenorDeEdad(persona)) {console.log('ACCESO DENEGADO')}
  else { console.log('PERMITIR ACCESO') }
}