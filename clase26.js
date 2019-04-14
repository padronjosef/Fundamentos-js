class Persona {
  constructor (nombre, apellido, altura, genero) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.genero = genero
    this.especie = 'humano'
  }

  saludar(fn) {
    // var nombre = this.nombre, apellido = this.apellido
    var {nombre, apellido} = this

    console.log(`hola, me llamo ${nombre} ${apellido}`)
    if (fn) { 
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super(nombre,apellido,altura)
  }

  saludar(fn) {
    var {nombre, apellido} = this

    console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function respondeSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`)
  }
}

var jose = new desarrollador('Jose', 'Padron', '1.82', 'masculino')
var daniela = new Persona('daniela', 'Padron', '1.63', 'femenino')
var natalia = new Persona('natalia', 'Fernandez', '1.21', 'femenino')

jose.saludar(respondeSaludo)
daniela.saludar()
natalia.saludar(respondeSaludo)