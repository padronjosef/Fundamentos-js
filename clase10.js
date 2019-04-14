var jose = {
  nombre: 'jose',
  apellido: 'padron',
  edad: 23,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  gamer: true
}

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

imprimirProfesiones(jose)

function imprimirSiEsMayorDeEdad (persona){
  if (persona.edad >= 18) {
    console.log('Es mayor de edad :)')
  } else {
    console.log('No es mayor de edad :(')
  }
}

imprimirSiEsMayorDeEdad (jose)