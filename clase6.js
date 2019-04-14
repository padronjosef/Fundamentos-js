var jose = {
  nombre: 'Jose',
  apellido: 'Padron',
  edad: 23
}

var daniela = {
  nombre: 'Daniela',
  apellido: 'padron',
  edad: 20
}

function imprimirNombreEnMayuscula(persona) {
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(jose)
imprimirNombreEnMayuscula(daniela)

// imprimirNombreEnMayuscula({nombre: 'mari'})

// imprimirNombreEnMayuscula({apellido: 'gomez'})
