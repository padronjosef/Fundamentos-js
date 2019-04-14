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

function imprimirNombreYEdad(nombre, edad) {
  var nombre = daniela.nombre
  var edad = daniela.edad
  console.log('hola soy ' + nombre + ' y tengo ' + edad + ' años')
}

imprimirNombreYEdad()